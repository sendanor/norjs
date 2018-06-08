
import AbstractElementController from '../../abstracts/AbstractElementController';
import template from './view-template.html';

/**
 * Controller for nor-button
 */
export default class ViewController extends AbstractElementController  {

	static getNorName () {
		return "ViewController";
	}

	static getTemplate () {
		return template;
	}

}
