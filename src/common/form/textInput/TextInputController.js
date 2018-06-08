
import AbstractElementController from '../../../abstracts/AbstractElementController';
import template from './text-input-template.html';

/**
 * Controller for nor-button
 */
export default class TextInputController extends AbstractElementController  {

	static getNorName () {
		return "TextInputController";
	}

	static getTemplate () {
		return template;
	}

}
