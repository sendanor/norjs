
import AbstractElementController from '../../../abstracts/AbstractElementController';
import template from './form-template.html';

/**
 * Controller for nor-button
 */
export default class FormController extends AbstractElementController  {

	static getNorName () {
		return "FormController";
	}

	static getTemplate () {
		return template;
	}

}
