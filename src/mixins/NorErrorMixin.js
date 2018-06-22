/** Error support for NorJS objects
 *
 * @ngInject
 * @return {ErrorMixin}
 */
export default function NorErrorMixinFactory () {

	return class NorErrorMixin {

		/**
		 * Returns an error message from an array of arguments.
		 *
		 * The class name will be included as a prefix.
		 *
		 * @param args {array.<string>}
		 * @returns {string}
		 */
		static norErrorMessage (...args) {
			return "[" + super.getName() + "] " + args.join(" ");
		}

		/**
		 * Returns an error object from an array of arguments.
		 *
		 * @param args
		 * @returns {Error}
		 */
		static norError (...args) {
			return new Error(super.norErrorMessage(...args));
		}

	};

}

