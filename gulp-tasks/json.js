import gulp from 'gulp';

import PATHS from '../paths.js';

export default function json() {
	return gulp.src(PATHS.src.json).pipe(gulp.dest(PATHS.build.json));
}
