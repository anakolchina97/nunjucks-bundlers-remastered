import gulp from 'gulp';
import gulpif from 'gulp-if';
import imagemin from 'gulp-imagemin';

import PATHS from '../paths';
import * as CONFIG from '../config';

export default function images() {
	return gulp
		.src([PATHS.src.images, `!${PATHS.src.imagesInline}/**.*`, `!${PATHS.src.sprites}`])
		.pipe(
			gulpif(
				CONFIG.shouldCompressImages,
				imagemin([imagemin.svgo({ plugins: [{ removeViewBox: false }] })], {
					verbose: true,
				})
			)
		)
		.pipe(gulp.dest(PATHS.build.images));
}
