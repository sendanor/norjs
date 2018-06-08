import _ from 'lodash';

/** Abstract base class for all NorJS objects
 *
 * **Note!** This class is being used manually to boostrap NorJS module system. See more at ../index.js.
 *
 * @ngInject
 * @return {AbstractObject}
 */
export default function AbstractObjectFactory () {

	return class AbstractObject {

		/**
		 * Type of this NorJS class.
		 *
		 * It can be:
		 *
		 *   - `"AbstractClass"` for abstract classes (default)
		 *   - `"Class"` for classes in general
		 *   - `"Service"` for services
		 *   - `"Controller"` for controllers in general
		 *   - `"Component"` for components
		 *   - `"Directive"` for directives
		 *   - `"Filter"` for filters
		 *   - `"Factory"` for factories
		 *   - `"Module"` for modules
		 *
		 * You should override this in your abstract implementations if the type changes from the parent class.
		 *
		 * Usually you don't need to implement it, since abstract classes will do it for you.
		 *
		 * @returns {string}
		 */
		static getNorType () {
			return "AbstractClass";
		}

		/**
		 * Returns the name of the current class.
		 *
		 * Child implementations should override this method to name their class.
		 *
		 * @returns {string}
		 */
		static getNorName () {
			return "AbstractObject";
		}

		/**
		 * Returns the concrete class
		 *
		 * @returns {typeof AbstractObject}
		 */
		static getClass () {
			return this;
		}

		/**
		 *
		 * @param norName {string} The component identifier
		 */
		constructor () {

			/**
			 * The component identifier
			 *
			 * @member {string}
			 */
			this.__norName = this.getClass().getNorName();

			/**
			 * Registered event listeners
			 *
			 * @member {{}}
			 */
			this.__listeners = {};

		}

		/**
		 * Returns the concrete class.
		 *
		 * @returns {typeof AbstractObject}
		 */
		getClass () {
			return this.constructor;
		}

		/**
		 * Returns unique name of the object type
		 *
		 * @returns {string}
		 */
		get norName () {
			return this.__norName;
		}

		/**
		 * Returns unique name of the object type
		 *
		 * @returns {string}
		 */
		getNorName () {
			return this.__norName;
		}

		/**
		 * Returns NorJS object type
		 *
		 * @returns {string}
		 */
		getNorType () {
			return "Instance";
		}

		/**
		 * Trigger an event with optional arguments
		 * @param name {string}
		 * @param args {Array}
		 */
		emit (name, ...args) {

			if (!_.has(this.__listeners, name)) {
				return;
			}

			const listeners = this.__listeners[name];
			_.forEach(listeners, listener => {
				this.__callFunction(listener, args);
			});
		}

		/**
		 *
		 * @param name {string}
		 * @param listener {function}
		 * @return {function()} Destruction function
		 */
		on (name, listener) {

			const callback = (...args) => listener(...args);

			if (!_.has(this.__listeners, name)) {
				this.__listeners[name] = [];
			}
			this.__listeners[name].push(callback);

			return () => {
				const listeners = this.__listeners[name];
				_.remove(listeners, l => l === callback);
				if(listeners.length === 0) {
					delete this.__listeners[name];
				}
			};
		}

		/**
		 *
		 * @param name {string}
		 * @param listener {function}
		 */
		once (name, listener) {
			const destructor = this.on(name, (...args) => {
				destructor();
				return listener(...args);
			});
			return destructor;
		}

		/**
		 * Exception safe function caller
		 *
		 * @param f {function}
		 * @param args {array}
		 * @return {*}
		 * @protected
		 */
		__callFunction (f, args) {
			try {
				return f(...args);
			} catch (e) {
				console.error('' + this.norName + ': Error: ' + e);
				console.debug('Exception: ', e);
			}
		}

	};

}

