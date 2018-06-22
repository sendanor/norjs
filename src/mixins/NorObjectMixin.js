/** NorJS core object support
 *
 * @ngInject
 * @return {NorObjectMixin}
 */
export default function NorObjectMixinFactory () {

	return class NorObjectMixin {

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
		static norType () {
			return "AbstractClass";
		}

		/**
		 * Returns the name of the current class.
		 *
		 * Child implementations should override this method to name their class.
		 *
		 * @returns {string}
		 */
		static norName () {
			return "AbstractObject";
		}

		/**
		 * Returns the concrete class
		 *
		 * @returns {typeof AbstractObject}
		 */
		static norClass () {
			return this;
		}

		/**
		 * Returns the concrete class.
		 *
		 * @returns {typeof AbstractObject}
		 */
		norClass () {
			return this.constructor;
		}

		/**
		 * Returns unique name of the object type
		 *
		 * @returns {string}
		 */
		norName () {
			return this.norClass().norName();
		}

		/**
		 * Returns NorJS object type
		 *
		 * @returns {string}
		 */
		norType () {
			return "Instance";
		}

	};

}

