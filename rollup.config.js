import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const extensions = [ 'js', 'jsx', 'ts', 'tsx', 'mjs' ];
const pkg = require('./package.json')
const config = [
    {
        input: './src/lib/index.ts',
        output: [
            {
                dir: './dist',
                format: 'cjs',
                preserveModules: true,
                preserveModulesRoot: 'src'
            },
            {
                file: pkg.module,
                format: 'es'
            }
            ,
            {
                name: pkg.name,
                file: pkg.browser,
                format: 'umd'
            }
        ],
        plugins: [
            nodeResolve({ extensions }),
            babel({
                exclude: 'node_modules/**',
                extensions,
                include: [ 'src/lib/**/*' ]
            }),
            commonjs({ include: 'node_modules/**' }),
            peerDepsExternal(),
            typescript({ tsconfig: './tsconfig.json' })
        ]
    }
];
export default config;