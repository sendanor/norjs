import template from './password-template.html';

/**
 * Factory for nor-password
 *
 * @ngInject
 */
export default function PasswordFactory (AbstractComponent) {

	/**
	 * Controller for nor-password
	 * @ngInject
	 */
	return class PasswordComponent extends AbstractComponent  {

		static getName () {
			return "PasswordComponent";
		}

		static getTagName () {
			return "norPassword";
		}

		static getTemplate () {
			return template;
		}

	};

}

