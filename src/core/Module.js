/**
 * Class for NorJS modules
 *
 * @ngInject
 * @param ModuleService {ModuleService}
 * @return {Module}
 */
export default function ModuleFactory (ModuleService) {

	/**
	 * @type {AbstractModule}
	 */
	const AbstractModule = ModuleService.get("AbstractModule");

	/**
	 * @type {AssertUtils}
	 */
	const AssertUtils = ModuleService.get("AssertUtils");

	return class Module extends AbstractModule {

		constructor (name, dependencies) {
			super("Module");

			this.__setName(name);
			this.__setDependencies(dependencies);
		}

		/**
		 * Returns the module name
		 */
		get name () {
			return this.__name;
		}

		/**
		 * Register a factory
		 *
		 * @param name {string}
		 * @param implementation
		 * @returns {Module}
		 */
		factory (name, implementation) {
			return this;
		}

		/**
		 * Register a constant
		 *
		 * @param name {string}
		 * @param implementation
		 * @returns {Module}
		 */
		constant (name, implementation) {
			return this;
		}

		/**
		 * Register a filter
		 *
		 * @param name {string}
		 * @param implementation
		 * @returns {Module}
		 */
		filter (name, implementation) {
			return this;
		}

		/**
		 * Register a variable
		 *
		 * @param name {string}
		 * @param implementation
		 * @returns {Module}
		 */
		variable (name, implementation) {
			return this;
		}

		/**
		 * Register an abstract class
		 *
		 * @param name {string}
		 * @param implementation
		 * @returns {Module}
		 */
		abstractClass (name, implementation) {
			return this;
		}

		/**
		 * Register a concrete class
		 *
		 * @param name {string}
		 * @param implementation
		 * @returns {Module}
		 */
		concreteClass (name, implementation) {
			return this;
		}

		/**
		 * Register an interface class
		 *
		 * @param name {string}
		 * @param implementation
		 * @returns {Module}
		 */
		interfaceClass (name, implementation) {
			return this;
		}

		/**
		 * Register a service
		 *
		 * @param name {string}
		 * @param implementation
		 * @returns {Module}
		 */
		service (name, implementation) {
			return this;
		}

		/**
		 * Register a controller
		 *
		 * @param name {string}
		 * @param implementation
		 * @returns {Module}
		 */
		controller (name, implementation) {
			return this;
		}

		/**
		 * Register a template
		 *
		 * @param name {string}
		 * @param implementation
		 * @returns {Module}
		 */
		template (name, implementation) {
			return this;
		}

		/**
		 * Register a component
		 *
		 * @param name {string}
		 * @param implementation
		 * @returns {Module}
		 */
		component (name, implementation) {
			return this;
		}

		/**
		 * Register a directive
		 *
		 * @param name {string}
		 * @param implementation
		 * @returns {Module}
		 */
		directive (name, implementation) {
			return this;
		}

		/**
		 * Set module name
		 *
		 * @param value {string}
		 * @private
		 */
		__setName (value) {
			AssertUtils.isString(value);
			this.__name = value;
		}

		/**
		 * Set module dependencies as an array of module names
		 *
		 * @param value {array.<string>}
		 * @private
		 */
		__setDependencies (value) {
			AssertUtils.isArray(value);
			AssertUtils.eachIsString(value);
			this.__dependencies = value;
		}

	};

}

