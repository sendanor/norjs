/**
 * Abstract base class for NorJS services
 *
 * @ngInject
 * @param AbstractObject {AbstractObject}
 * @return {AbstractController}
 */
export default function AbstractControllerFactory (AbstractObject) {

	return class AbstractController extends AbstractObject {

		static getNorType () {
			return "Controller";
		}

		static getNorName () {
			return "AbstractController";
		}

	};

}

