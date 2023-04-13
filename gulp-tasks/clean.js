import { deleteAsync } from 'del';

import PATHS from '../paths.js';

export default function clean() {
	return deleteAsync(PATHS.clean);
}
