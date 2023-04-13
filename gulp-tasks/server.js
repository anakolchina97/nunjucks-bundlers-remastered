import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
import notifier from 'node-notifier';

import PATHS from '../paths.js';
import webpackConfig from '../webpack.config.js';
import { hmrEnabled } from '../config.js';

import browserSync from 'browser-sync';
browserSync.create();
const bundler = webpack(webpackConfig);

let watchFiles = [PATHS.build.styles + '*.css', PATHS.build.html + '/*.html'];

if (!hmrEnabled) {
	watchFiles.push(PATHS.build.scripts + '*.js');
}

export default function server() {
	browserSync.init({
		server: {
			baseDir: './build',
			middleware: hmrEnabled
				? [
						webpackDevMiddleware(bundler, {
							publicPath: webpackConfig.output.publicPath,
						}),
						webpackHotMiddleware(bundler, {
							log: false,
						}),
				  ]
				: [],
		},
		injectchanges: true,
		notify: false,
		open: false,
		port: 9000,
		logPrefix: 'SP.Starter',
		files: watchFiles,
	});
}
