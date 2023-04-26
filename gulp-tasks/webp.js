import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import webp from 'imagemin-webp';
import rename from 'gulp-rename';

import PATHS from '../paths.js';

export default function webpTask() {
	return gulp
		.src(PATHS.src.rasterImages)
		.pipe(imagemin([webp()]))
		.pipe(rename({ extname: '.webp' }))
		.pipe(gulp.dest(PATHS.build.images));
}
