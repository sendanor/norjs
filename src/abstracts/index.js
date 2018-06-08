import norjs from '../core/index';

import AbstractControllerFactory from './AbstractController';
import AbstractElementControllerFactory from './AbstractElementController';

export default norjs.module('norjs.abstracts', [
	  AbstractControllerFactory
	, AbstractElementControllerFactory
]);
