
import AbstractElementController from '../../abstracts/AbstractElementController';
import template from './menu-template.html';

/**
 * Controller for nor-button
 */
export default class MenuController extends AbstractElementController  {

	static getNorName () {
		return "MenuController";
	}

	static getTemplate () {
		return template;
	}

}
