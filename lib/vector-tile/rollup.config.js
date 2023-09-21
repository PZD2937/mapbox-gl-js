import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
    input: './index.js',
    output: [{
        file: './dist/vector-tile.js',
        format: 'umd',
        name: 'vectorTile',
        sourcemap: 'inline',
        indent: false,
    }],
    plugins: [
        resolve({
            browser: true,
            preferBuiltins: false,
            mainFields: ['browser', 'main']
        }),
        commonjs()
    ].filter(Boolean)
}
