/**
 * Class for NorJS modules
 *
 * @ngInject
 * @param AbstractModule {AbstractModule}
 * @return {Module}
 */
export default function ModuleFactory (AbstractModule) {

	return class Module extends AbstractModule {

		static getNorName () {
			return "Module";
		}

		/**
		 *
		 * @param name {string}
		 * @param dependencies {Array.<string>}
		 */
		module (name, dependencies) {

		}

	};

}

