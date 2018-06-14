/**
 * Abstract base class for NorJS element controllers
 *
 * @ngInject
 * @param AbstractController {AbstractController}
 * @return {AbstractComponent}
 */
export default function AbstractComponentFactory (AbstractController) {

	return class AbstractComponent extends AbstractController {

		static getType () {
			return "Component";
		}

		static getName () {
			return "AbstractComponent";
		}

	};

}

