/**
 * Abstract base class for NorJS element controllers
 *
 * @ngInject
 * @param AbstractController {AbstractController}
 * @return {AbstractComponent}
 */
export default function AbstractComponentFactory (AbstractController) {

	return class AbstractComponent extends AbstractController {

		static norType () {
			return "Component";
		}

		static norName () {
			return "AbstractComponent";
		}

	};

}

