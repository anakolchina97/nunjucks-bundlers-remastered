import gulp from 'gulp';

import PATHS from '../paths.js';

export default function pdf() {
	return gulp.src(PATHS.src.pdf).pipe(gulp.dest(PATHS.build.pdf));
}
