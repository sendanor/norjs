/** Factory for ModuleService
 *
 * @ngInject
 * @param ModuleService {ModuleService}
 */
export default function ModuleServiceFactory (AbstractService) {

	/**
	 * Controller for nor-button
	 */
	return class ModuleService extends AbstractService  {

		constructor () {
			super("ModuleService");

			this.register("ModuleService", this);
			this.register("AbstractService", AbstractService);
		}

		/**
		 *
		 * @param name {string}
		 * @param implemenation {*}
		 * @returns {ModuleService}
		 */
		register (name, implemenation) {

			return this;
		}

		/**
		 *
		 * @param name {string}
		 * @param implemenation {*}
		 * @returns {ModuleService}
		 */
		registerFactory (name, implemenation) {

			return this;
		}

		/**
		 * Returns an implementation by name
		 *
		 * @param name {string}
		 * @returns {*}
		 */
		get (name) {

		}

	};

}

