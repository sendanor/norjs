/** Factory for ModuleService
 *
 * **Note!** This class is being used manually to boostrap NorJS module system. See more at ../index.js.
 *
 * @ngInject
 * @param ModuleService {ModuleService}
 */
export default function ModuleServiceFactory (AbstractModuleService) {

	/**
	 */
	return class ModuleService extends AbstractModuleService  {

		static getNorName () {
			return "ModuleService";
		}

	};

}

