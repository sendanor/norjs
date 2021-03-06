import norjs from '../../core/index';

import ButtonModule from './button/index';
import PasswordInputModule from './passwordInput/index';
import TextInputModule from './textInput/index';
import FormController from './FormController';

export default norjs.module('norjs.common.form', [
	  ButtonModule
	, PasswordInputModule
	, TextInputModule
	, FormController
]);
