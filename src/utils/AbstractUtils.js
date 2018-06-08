/**
 * Abstract base class for NorJS utils
 *
 * @ngInject
 * @param AbstractObject {AbstractObject}
 * @return {AbstractUtils}
 */
export default function AbstractUtilsFactory (AbstractObject) {

	return class AbstractUtils extends AbstractObject {

		static getNorType () {
			return "Service";
		}

		static getNorName () {
			return "AbstractUtils";
		}

	};

}

