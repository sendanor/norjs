import _ from 'lodash';

const STRIP_COMMENTS = /(\/\/.*$)|(\/\*[\s\S]*?\*\/)/mg;
const STRIP_PARAMS = /(\s*=[^,]*(('(?:\\'|[^'\r\n])*')|("(?:\\"|[^"\r\n])*"))|(\s*=[^,]*))/mg;
const ARGUMENT_NAMES = /([^\s,]+)/g;

/**
 * Abstract base class for NorJS module services
 *
 * **Note!** This class is being used manually to boostrap NorJS module system. See more at ../index.js.
 *
 * @param AbstractService {AbstractService}
 * @return {AbstractModuleService}
 * @ngInject
 */
export default function AbstractModuleServiceFactory (AbstractService) {

	function getNorName (obj) {
		return obj && _.isFunction(obj.norName) ? obj.norName() : undefined;
	}

	function getNorType (obj) {
		return (obj && _.isFunction(obj.norType))
			? obj.norType()
			: (_.isFunctin(obj) ? "Factory" : "");
	}

	return class AbstractModuleService extends AbstractService {

		static norType () {
			return "Service";
		}

		static norName () {
			return "AbstractModuleService";
		}

		constructor () {
			super();

			this.__initRegistered();

			this.REGISTERED_EVENT = 'registered';

			// FIXME: When events has support for stacking, convert to use it, so that we don't trigger it on all
			// events until for example 100 ms has passed
			this.on(this.REGISTERED_EVENT, () => this.__processRegisteringQueue());

		}

		/**
		 *
		 * @param ...implementations {typeof AbstractObject}
		 * @returns {AbstractModuleService}
		 */
		register (...implementations) {

			_.forEach(implementations, implementation => {

				if (_.isArray(implementation)) {
					this.register(...implementation);
					return;
				}

				//console.log('implementation = ', implementation);

				const type = getNorType(implementation);

				console.log('type = ', type);

				switch (type) {
				case "Factory":
					this.registerFactory(implementation);
					return;
				case "Service":
					this.registerService(implementation);
					return;
				case "Module":
					this.registerModule(implementation);
					return;
				default:
					this.registerInstance( getNorName(implementation), implementation);
					return;
				}

			});

			return this;
		}

		/**
		 *
		 * @param factory {function}
		 * @returns {AbstractModuleService}
		 */
		registerFactory (factory) {
			// FIXME: Add asserts

			const required = this.__parseFunctionArgumentNames(factory);

			if (this.hasAll(required)) {
				const dependencies = this.getAll(required);
				const implementation = factory(...dependencies);
				return this.register(implementation);
			} else {
				this.__addFactoryToRegisteringQueue(factory, required);
			}

			return this;
		}

		/**
		 * Register everything from a module
		 *
		 * @param module {typeof AbstractModule}
		 */
		registerModule (module) {
			if (!(module && _.isFunction(module.getItems))) {
				throw new TypeError("Not a module: " + module);
			}
			const items = module.getItems();
			_.forEach(items, item => {
				this.register(item);
			});
			return this;
		}

		/**
		 * Register a service
		 *
		 * @param ServiceClass {typeof AbstractObject}
		 */
		registerService (ServiceClass) {
			const service = new ServiceClass();
			return this.registerInstance(getNorName(service), service);
		}

		/**
		 * Register any variable
		 *
		 * @param name {string}
		 * @param implementation {*}
		 */
		registerInstance (name, implementation) {
			// FIXME: Add asserts

			this.__registered[name] = implementation;
			this.emit(this.REGISTERED_EVENT, name);
			console.log('Registered: ', name);
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
			return _.has(this.__registered, name);
		}

		/**
		 * Returns true if every dependency is registered
		 *
		 * @param names {Array.<string|Array.<string> >}
		 * @returns {boolean}
		 */
		hasAll (...names) {
			// FIXME: Add assert
			return _.every(names, name => {
				if (_.isString(name)) return this.has(name);
				if (_.isArray(name)) return this.hasAll(...name);
				return false;
			});
		}

		/**
		 * Returns array of missing dependencies
		 *
		 * @param names {Array.<string>}
		 * @returns {Array.<string>}
		 */
		getMissingDependencies (...names) {
			// FIXME: Add assert

			return _.uniq(_.reduce(
				names,
				(a, b) => [].concat(a, _.isArray(b) ? b : [b]),
				[]
			)).filter( name => _.isString(name) && !this.has(name) );
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

			if(!_.has(this.__registered, name)) throw new Error("Module not found: " + name);

			return this.__registered[name];
		}

		/**
		 * Returns implementations by array of names
		 *
		 * @param names {Array.<string|Array.<string> >}
		 * @returns {Array.<*>}
		 * @throws {Error} if module is not installed
		 */
		getAll (...names) {
			// FIXME: Add assert
			return _.reduce(_.map(names, name => {
				if (_.isString(name)) return [this.get(name)];
				if (_.isArray(name)) return this.getAll(...name);
				throw new TypeError("Unknown argument type: " + (typeof name) + ": " + name);
			}), (a, b) => a.concat(b), []);
		}

		/** Initialize registry member variables
		 *
		 * @private
		 */
		__initRegistered () {

			/**
			 * Registered objects
			 *
			 * @member {{}}
			 * @private
			 */
			this.__registered = {};

			/**
			 * Registrations waiting for required dependency
			 *
			 * @member {{}}
			 * @private
			 */
			this.__registering = [];

		}

		/**
		 * Detect argument names from a function
		 *
		 * @param f {function}
		 * @return {Array.<string>} argument names from `f`
		 * @private
		 */
		__parseFunctionArgumentNames (f) {
			// FIXME: Add assert
			//debug.assert(f).is('function');

			let str = f.toString().replace(STRIP_COMMENTS, '');

			if (str.substr(0, 'class '.length) === 'class ') {
				str = str.substr(str.indexOf('{')+1);
				// FIXME: Use this.log.debug() once we have it
				//debug.log('str = ', str);
			}

			str = str.substr(str.indexOf('(')+1);
			str = str.substr(0, str.lastIndexOf(')', str.indexOf('{')));
			str = str.replace(STRIP_PARAMS, '');

			const result = str.match(ARGUMENT_NAMES);
			if (!_.isArray(result)) return [];
			return result;
		}

		/**
		 * Check if any queued registration can be done
		 *
		 * @return {number} Amount of registered items.
		 * @private
		 */
		__processRegisteringQueue () {
			let totalCount = 0;
			let count;
			do {
				count = 0;

				const queue = [].concat(this.__registering);
				_.forEach(queue, item => {
					const required = item.required;
					if (!this.hasAll(required)) return;
					const factory = item.factory;
					this.register(factory);
					this.__removeFactoryFromRegisteringQueue(factory);
					count += 1;
				});

				console.log('Processed ' + count + " items from registering queue.");
				totalCount += count;

			} while(count >= 1);

			console.log('Processed total of ' + totalCount + " items from registering queue.");
			return totalCount;
		}

		/**
		 *
		 * @param factory {function}
		 * @returns {boolean}
		 * @private
		 */
		__hasFactoryInRegisteringQueue (factory) {
			// FIXME: Add assert
			return _.indexOf(this.__registering, item => item.factory === factory) >= 0;
		}

		/**
		 *
		 * @param factory {function}
		 * @param required {Array.<string>}
		 * @private
		 */
		__addFactoryToRegisteringQueue (factory, required) {
			// FIXME: Add asserts

			console.log('Waiting for dependencies: ', this.getMissingDependencies(required));

			if (this.__hasFactoryInRegisteringQueue(factory)) {
				console.log('Factory was already in queue');
				return;
			}

			this.__registering.push({
				required,
				factory
			});
		}

		/**
		 *
		 * @param factory {function}
		 * @private
		 */
		__removeFactoryFromRegisteringQueue (factory) {
			// FIXME: Add assert
			_.remove(this.__registering, item => item.factory === factory);
		}

	};

}

