
import AbstractElementController from '../../../abstracts/AbstractElementController';
import template from './password-input-template.html';

/**
 * Controller for nor-button
 * @ngInject
 */
export default class PasswordInputController extends AbstractElementController  {

	static getNorName () {
		return "PasswordInputController";
	}

	static getTemplate () {
		return template;
	}

}
