/**
 * Abstract base class for NorJS modules
 *
 * @ngInject
 * @param ModuleService {ModuleService}
 * @return {AbstractModule}
 */
export default function AbstractModuleFactory (ModuleService) {

	/**
	 * @member {AbstractObject}
	 */
	const AbstractObject = ModuleService.get('AbstractObject');

	return class AbstractModule extends AbstractObject {

		constructor (norName) {
			super(norName);
		}

	};

}

