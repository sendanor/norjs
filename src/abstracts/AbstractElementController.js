/**
 * Abstract base class for NorJS element controllers
 *
 * @ngInject
 * @param AbstractController {AbstractController}
 * @return {AbstractComponentController}
 */
export default function AbstractComponentControllerFactory (AbstractController) {

	return class AbstractComponentController extends AbstractController {

		static getNorType () {
			return "Component";
		}

		static getNorName () {
			return "AbstractComponentController";
		}

	};

}

