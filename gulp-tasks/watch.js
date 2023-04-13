import gulpWatch from 'gulp-watch';

import PATHS from '../paths';
import html from './html';
import styles from './styles';
import fonts from './fonts';
import images from './images';
import svg from './svg';

export default function watch() {
	gulpWatch(PATHS.watch.njk, html);
	gulpWatch([PATHS.watch.styles], styles);
	gulpWatch([PATHS.watch.fonts], fonts);
	gulpWatch([PATHS.watch.images], images);
	gulpWatch([PATHS.watch.svg], svg);
}
