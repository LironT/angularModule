import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import angular from 'rollup-plugin-angular';
import typescript from 'rollup-plugin-typescript';
import {nameLibrary, PATH_SRC, PATH_DIST} from './config-library.js';

var sass = require('node-sass');

export default {
	input: PATH_SRC + nameLibrary + '.ts',
	output: {
		name: nameLibrary,
		sourcemap: true,
		file: PATH_DIST + nameLibrary + ".umd.js",
		format: 'umd',
	},
	external: [
		'@angular/core',
		"@angular/platform-browser",
		"rxjs/Rx",
		"@angular/forms"
	],
	plugins: [
		angular({
      preprocessors: {
        template: template => template,
        style: scss => scss ? sass.renderSync({ data: scss }).css.toString() : ''
      }
    }),
		typescript({ typescript: require('typescript') }),
		resolve({ module: true, main: true }),
		commonjs({ include: 'node_modules/**' })
	],
	onwarn: warning => {
		const skip_codes = ['THIS_IS_UNDEFINED', 'MISSING_GLOBAL_NAME'];
		if (skip_codes.indexOf(warning.code) !== -1) return;
		console.error(warning);
	}
};