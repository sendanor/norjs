import _ from 'lodash';

/** Factory for ModuleService
 *
 * **Note!** This class is being used manually to boostrap NorJS module system. See more at ../index.js.
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

			this._initRegistered();
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
			// FIXME: Add asserts
			this._registered[name] = implemenation;
			return this;
		}

		/**
		 *
		 * @param name {string}
		 * @param implemenation {*}
		 * @returns {ModuleService}
		 */
		registerFactory (name, implemenation) {
			// FIXME: Add asserts
			// FIXME: Implement depency injection
			this._registered[name] = implemenation();
			return this;
		}

		/**
		 * Check if instance is registered
		 *
		 * @param name {string}
		 * @returns {boolean}
		 * @throws {Error} if module is not installed
		 */
		has (name) {
			// FIXME: Add asserts
			return _.has(this._registered, name);
		}

		/**
		 * Returns an implementation by name
		 *
		 * @param name {string}
		 * @returns {*}
		 * @throws {Error} if module is not installed
		 */
		get (name) {
			// FIXME: Add asserts
			// FIXME: Convert to use own exception type NorJsModuleError or something like that

			if(!_.has(this._registered, name)) throw new Error("Module not found: " + name);

			return this._registered[name];
		}

		/** Initialize registry member variables
		 *
		 * @private
		 */
		_initRegistered () {

			/**
			 * Registered objects
			 *
			 * @member {{}}
			 * @private
			 */
			this._registered = {};
		}

	};

}

