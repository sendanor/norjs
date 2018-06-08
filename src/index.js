import norjs from './core/index';

import AbstractsModule from './abstracts/index';
import CommonModule from './common/index';
import ObjectsModule from './objects/index';
import ServicesModule from './services/index';
import UtilsModule from './utils/index';

/**
 * NorJS module
 *
 * @type {Module}
 */
export default norjs.module("norjs", [
	  AbstractsModule

	, CommonModule
	, ObjectsModule
	, ServicesModule
	, UtilsModule

]);
