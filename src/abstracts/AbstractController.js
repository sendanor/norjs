/**
 * Abstract base class for NorJS services
 *
 * @ngInject
 * @param AbstractObject {AbstractObject}
 * @return {AbstractService}
 */
export default function AbstractServiceFactory (AbstractObject) {

	return class AbstractService extends AbstractObject {

		constructor (norName) {
			super(norName);
		}

	};

}

