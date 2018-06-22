import _ from 'lodash';

/** Observable event support for NorJS objects
 *
 * @ngInject
 * @return {ObservableMixin}
 */
export default function NorObservableMixinFactory (log) {

	/**
	 * Exception safe function caller
	 *
	 * @param f {function}
	 * @param args {array}
	 * @return {*}
	 * @protected
	 */
	function callFunction (f, args) {
		try {
			return f(...args);
		} catch (e) {
			log.error(e);
			log.debug('Exception: ', e);
		}
	}

	return class NorObservableMixin {

		/**
		 * Initializes internal data
		 */
		norInit () {

			/**
			 * Registered event listeners
			 *
			 * @member {{}}
			 */
			this.__listeners = {};

		}

		/**
		 * Removes event listeners.
		 */
		norDestroy () {
			delete this.__listeners;
		}

		/**
		 * Trigger an event with optional arguments
		 * @param name {string}
		 * @param args {Array}
		 */
		norEmit (name, ...args) {

			if (!_.has(this.__listeners, name)) {
				return;
			}

			const listeners = this.__listeners[name];
			_.forEach(listeners, listener => {
				callFunction(listener, args);
			});
		}

		/**
		 *
		 * @param name {string}
		 * @param listener {function}
		 * @return {function()} Destruction function
		 */
		norOn (name, listener) {

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
		norOnce (name, listener) {
			const destructor = this.on(name, (...args) => {
				destructor();
				return listener(...args);
			});
			return destructor;
		}

	};

}

