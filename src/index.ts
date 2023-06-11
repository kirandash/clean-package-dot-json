import { promises as fs } from 'fs'
import { cli } from 'cleye'
import { defaultIgnoreProperties } from './constants'

const packageJsonPath = './package.json'

const argv = cli({
  flags: {
    ignore: {
      type: [String],
      alias: 'i',
      description: 'package.json properties to ignore during cleanup',
    },
    verbose: {
      type: Boolean,
      alias: 'v',
      description: 'Log changes',
    },
    dry: {
      type: Boolean,
      alias: 'd',
      description: 'Dry run',
    },
  },
})

const log = (...args: any[]) => {
  if (argv.flags.verbose) {
    console.info(...args)
  }
}

const main = async () => {
  const packageJsonExists = await fs
    .access(packageJsonPath)
    .then(() => true)
    .catch(() => false)

  if (!packageJsonExists) {
    throw new Error(`${packageJsonPath} does not exist`)
  }

  const packageJsonString = await fs.readFile(packageJsonPath, 'utf-8')
  const packageJson = JSON.parse(packageJsonString)

  const ignoreProperties = new Set([
    ...defaultIgnoreProperties,
    ...argv.flags.ignore.flatMap((ignoreProperty) => ignoreProperty.split(',')),
  ])

  log('Ignoring properties:', ignoreProperties)

  for (const property in packageJson) {
    if (ignoreProperties.has(property)) {
      continue
    }
    if (property === 'scripts') {
      for (const script in packageJson.scripts) {
        if (ignoreProperties.has(`scripts.${script}`)) {
          continue
        }
        delete packageJson.scripts[script]
      }
      if (Object.keys(packageJson.scripts).length > 0) {
        continue
      }
    }
    delete packageJson[property]
  }

  const newPackageJsonString = JSON.stringify(packageJson, null, 2)

  if (argv.flags.dry || argv.flags.verbose) {
    console.info(newPackageJsonString)
  }

  if (!argv.flags.dry) {
    await fs.writeFile(packageJsonPath, newPackageJsonString)
    log(`cleaned up ${packageJsonPath}`)
  }
}

main()
