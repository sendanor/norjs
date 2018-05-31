/**
 * Abstract base class for NorJS element controllers
 *
 * @ngInject
 * @param AbstractController {AbstractController}
 * @return {AbstractElementController}
 */
export default function AbstractElementControllerFactory (AbstractController) {

	return class AbstractElementController extends AbstractController {

		constructor (norName) {
			super(norName);
		}

	};

}

