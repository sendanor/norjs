/**
 * Abstract base class for NorJS modules
 *
 * @ngInject
 * @param AbstractObject {AbstractObject}
 * @param AssertUtils {AssertUtils}
 * @return {AbstractModule}
 */
export default function AbstractModuleFactory (AbstractObject) {

	return class AbstractModule extends AbstractObject {

		static getNorName () {
			return "AbstractModule";
		}

		/**
		 *
		 * @param norName {string}
		 * @param moduleName {string}
		 * @param dependencies {Array.<string>}
		 */
		constructor (moduleName, dependencies) {
			super();

			/**
			 *
			 * @type {string}
			 * @private
			 */
			this.__name = moduleName;

			/**
			 *
			 * @type {Array.<string>}
			 * @private
			 */
			this.__dependencies = dependencies;

		}

		getNorType () {
			return "Module";
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
		 * @protected
		 */
		__setName (value) {
			//AssertUtils.isString(value);
			this.__name = value;
		}

		/**
		 * Set module dependencies as an array of module names
		 *
		 * @param value {Array.<string>}
		 * @protected
		 */
		__setDependencies (value) {
			//AssertUtils.isArray(value);
			//AssertUtils.eachIsString(value);
			this.__dependencies = value;
		}

	};

}

