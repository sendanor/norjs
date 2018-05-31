
/** Abstract base class for all NorJS objects
 *
 * @ngInject
 * @return {AbstractObject}
 */
export default function AbstractObjectFactory () {

	return class AbstractObject {

		/**
		 *
		 * @param norName {string} The component identifier
		 */
		constructor (norName) {

			/**
			 * The component identifier
			 *
			 * @member {string}
			 */
			this.__norName = norName;

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

	};

}

