/** Utilities to manipulate JavaScript variables
 *
 * **Note!** This class is being used manually to boostrap NorJS module system. See more at ../index.js.
 *
 * @ngInject
 * @param AbstractUtils {AbstractUtils}
 * @return {ObjectUtils}
 */
export default function ObjectUtilsFactory (AbstractUtils) {

	return class ObjectUtils extends AbstractUtils {

		static norName () {
			return "ObjectUtils";
		}

	};

}

