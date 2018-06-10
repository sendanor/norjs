import _ from 'lodash';

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
			this.__dependencies = _.concat([], dependencies);

			/**
			 *
			 * @type {Object}
			 * @private
			 */
			this.__modules = {
				[moduleName]: this
			};

			/**
			 * Registered items
			 *
			 * @type {Array}
			 * @private
			 */
			this.__items = [];

			this.MODULE_ADDED_EVENT = 'module:added';
			this.ITEM_ADDED_EVENT = 'item:added';

		}

		getNorType () {
			return "Module";
		}

		/**
		 * Returns the module name
		 */
		getName () {
			return this.__name;
		}

		/**
		 * Returns the module name
		 */
		get name () {
			return this.getName();
		}

		/**
		 *
		 * @param name {string}
		 * @param dependencies {Array.<string>}
		 * @return {AbstractModule}
		 */
		module (name, dependencies=undefined) {

			if (dependencies) {
				let module = this.__createModule(name, dependencies);
				this.__registerModule(module);
				return module;
			}

			return this.__getModuleByName(name);
		}

		/**
		 *
		 * @param ...implementations {*}
		 */
		register (...implementations) {
			_.forEach(implementations, implementation => {
				if (_.isArray(implementation)) {
					this.register(...implementation);
					return;
				}
				this.__registerItem(implementation);
			});
		}

		/**
		 * Get every registered item.
		 *
		 * @returns {Array}
		 */
		getItems () {

			const myItems = _.cloneDeep(this.__items);

			const myModuleItems = _.reduce(
				_.map(
					_.filter(Object.keys(this.__modules), name => name !== this.__name),
					name => this.__modules[name].getItems()
				),
				(a, b) => a.concat(_.isArray(b) ? b : [b]),
				[]
			);

			return _.uniq(_.concat([], myItems, myModuleItems));
		}

		/**
		 *
		 * @param implementation {*}
		 * @return {boolean}
		 */
		__hasRegisteredItem (implementation) {
			return _.some(this.__items, i => i === implementation);
		}

		/**
		 *
		 */
		__registerItem (implementation) {
			if (this.__hasRegisteredItem(implementation)) {
				throw new TypeError("Module already has implementation");
			}
			this.__items.push(implementation);
			this.emit(this.ITEM_ADDED_EVENT, implementation);
		}

		/**
		 *
		 * @return {AbstractObject}
		 * @private
		 * @param name {string}
		 * @param dependencies {Array.<string>}
		 */
		__createModule (name, dependencies) {
			return new (this.getClass())(name, dependencies);
		}

		/**
		 *
		 * @param module {AbstractModule}
		 * @return {AbstractModule}
		 * @private
		 */
		__registerModule (module) {
			const name = module.getName();
			if (this.__hasModuleByName(name)) {
				throw new TypeError("Module exists already: " + name);
			}
			this.__modules[name] = module;
			this.emit(this.MODULE_ADDED_EVENT, name);
		}

		/**
		 *
		 * @param name {string}
		 * @return {boolean}
		 * @private
		 */
		__hasModuleByName (name) {
			return _.has(this.__modules, name);
		}

		/**
		 *
		 * @param name {string}
		 * @return {AbstractModule}
		 * @private
		 */
		__getModuleByName (name) {
			if (!this.__hasModuleByName(name)) throw new TypeError("No module found by name " + name);
			return this.__modules[name];
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

