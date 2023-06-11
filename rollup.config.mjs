import executable from 'rollup-plugin-executable'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'
import pkg from './package.json' assert { type: 'json' }

export default [
  {
    input: 'src/index.ts',
    external: [],
    output: [{ file: pkg.bin, format: 'cjs' }],
    plugins: [
      typescript({ tsconfig: './tsconfig.json' }),
      nodeResolve(),
      terser(),
      executable(),
    ],
  },
]
