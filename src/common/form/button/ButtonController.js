
/** Factory for ButtonController
 *
 * @param ModuleService {ModuleService}
 * @constructor
 * @ngInject
 */
export default function ButtonControllerFactory (ModuleService) {

	/** @member {AbstractElementController} */
	const AbstractElementController = ModuleService.get('AbstractElementController');

	/**
	 * Controller for nor-button
	 */
	class ButtonController extends AbstractElementController  {

		constructor () {
			super("ButtonController");
		}

	}

}

