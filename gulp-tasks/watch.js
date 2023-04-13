import gulpWatch from 'gulp-watch';

import PATHS from '../paths.js';
import html from './html.js';
import styles from './styles.js';
import fonts from './fonts.js';
import images from './images.js';
import svg from './svg.js';

export default function watch() {
	gulpWatch(PATHS.watch.njk, html);
	gulpWatch([PATHS.watch.styles], styles);
	gulpWatch([PATHS.watch.fonts], fonts);
	gulpWatch([PATHS.watch.images], images);
	gulpWatch([PATHS.watch.svg], svg);
}
