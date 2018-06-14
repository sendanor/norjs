import template from './text-template.html';

/**
 * Controller for nor-button
 * @ngInject
 */
export default function TextFactory (AbstractComponent) {

	return class TextComponent extends AbstractComponent  {

		static getName () {
			return "TextComponent";
		}

		static getTagName () {
			return "norText";
		}

		static getTemplate () {
			return template;
		}

	};

}

