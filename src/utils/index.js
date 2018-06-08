import norjs from '../core/index';

import AbstractUtilsFactory from './AbstractUtils';
import AssertUtilsFactory from './AssertUtils';
import ObjectUtilsFactory from './ObjectUtils';

export default norjs.module('norjs.utils', [
	  AbstractUtilsFactory
	, AssertUtilsFactory
	, ObjectUtilsFactory
]);
