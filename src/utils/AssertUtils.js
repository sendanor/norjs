/** Utilities to assert values
 *
 * @ngInject
 * @param AbstractUtils {AbstractUtils}
 * @return {AssertUtils}
 * @todo Add support for logging
 */
export default function AssertUtilsFactory (AbstractUtils) {

	return class AssertUtils extends AbstractUtils {

		static norName () {
			return "AssertUtils";
		}

		/**
		 * Assert value is a string.
		 *
		 * @param value {string}
		 * @param context {AbstractObject} Parent context
		 * @fixme Add support for log once we have it
		 * @throws {TypeError} If value is not correct
		 */
		isString (value, context) {
			if (!_.isString(value)) throw new TypeError("Not a string: " + value);
		}

		/**
		 * Assert value is an array.
		 *
		 * @param value {array}
		 * @param context {AbstractObject} Parent context
		 * @fixme Add support for log once we have it
		 */
		isArray (value, context) {
			if (!_.isArray(value)) throw new TypeError("Not an array: " + value);
		}

	};

}

