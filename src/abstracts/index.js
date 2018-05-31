import norjs from 'norjs';
import AbstractObjectFactory from './AbstractObject';
import AbstractControllerFactory from './AbstractController';
import AbstractElementControllerFactory from './AbstractElementController';

export default norjs.module('norjs.abstracts', [])
    .factory('AbstractObject', AbstractObjectFactory)
	.factory('AbstractController', AbstractControllerFactory)
	.factory('AbstractElementController', AbstractElementControllerFactory)
    .name;
