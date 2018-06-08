/** Factory for ButtonController
 *
 * @param ModuleService {ModuleService}
 * @param AbstractElementController {AbstractElementController}
 * @ngInject
 */
export default function ButtonControllerFactory (ModuleService, AbstractElementController) {

	/**
	 * Controller for nor-button
	 */
	class ButtonController extends AbstractElementController  {

		static getNorName () {
			return "ButtonController";
		}

	}

}

