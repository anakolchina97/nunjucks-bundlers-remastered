import gulp from 'gulp';
import clean from './gulp-tasks/clean.js';
import html from './gulp-tasks/html.js';
import styles from './gulp-tasks/styles.js';
import fonts from './gulp-tasks/fonts.js';
import assetsVersion from './gulp-tasks/assets-version.js';
import images from './gulp-tasks/images.js';
import svg from './gulp-tasks/svg.js';
import webpack from './gulp-tasks/webpack.js';
import webpTask from './gulp-tasks/webp.js';
import zip from './gulp-tasks/zip.js';
import watch from './gulp-tasks/watch.js';
import server from './gulp-tasks/server.js';

gulp.task('build', gulp.parallel(html, styles, fonts, images, svg, webpack, webpTask));

gulp.task('production', gulp.series(clean, 'build', assetsVersion));

gulp.task('zip', gulp.series('production', zip));

gulp.task('default', gulp.parallel('build', watch, server));
