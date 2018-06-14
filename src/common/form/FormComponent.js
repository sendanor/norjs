import template from './form-template.html';

/**
 * Controller for nor-form
 */
export default function FormFactory (AbstractComponent) {

	return class FormComponent extends AbstractComponent {

		static getName () {
			return "FormComponent";
		}

		static getTagName () {
			return "norForm";
		}

		static getTemplate () {
			return template;
		}

	};
}
