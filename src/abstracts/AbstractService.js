/**
 * Abstract base class for NorJS services
 *
 * @param AbstractObject {AbstractObject}
 * @return {AbstractService}
 * @ngInject
 */
export default function AbstractServiceFactory (AbstractObject) {

	return class AbstractService extends AbstractObject {

		constructor (norName) {
			super(norName);
		}

	};

}

