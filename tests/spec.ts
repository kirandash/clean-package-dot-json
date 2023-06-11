import path from 'path'
import { execaNode } from 'execa'

const buildScriptPath = path.resolve('./dist/index.js')

describe('clean-package-dot-json', () => {
  test('removes redundant properties', async () => {
    const { stdout } = await execaNode(buildScriptPath, ['--dry'], {
      cwd: path.resolve('./tests/test-package'),
    })
    expect(JSON.parse(stdout)).toEqual({
      name: 'test-package',
      version: '1.0.0',
      description: 'test package',
      scripts: {
        postinstall: 'node ./postinstall.js',
      },
      dependencies: {
        lodash: '^4.17.4',
      },
      author: 'Kiran Dash',
    })
  })
})
