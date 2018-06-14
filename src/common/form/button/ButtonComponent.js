import template from './button-template.html';

/** Factory for ButtonComponent
 *
 * @param ModuleService {ModuleService}
 * @param AbstractComponent {AbstractComponent}
 * @ngInject
 */
export default function ButtonFactory (ModuleService, AbstractComponent) {

	/**
	 * Controller for nor-button
	 */
	class ButtonComponent extends AbstractComponent  {

		static getName () {
			return "ButtonComponent";
		}

		static getTagName () {
			return "norButton";
		}

		static getTemplate () {
			return template;
		}

	}

}

