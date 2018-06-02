/**
 * Abstract base class for NorJS services
 *
 * **Note!** This class is being used manually to boostrap NorJS module system. See more at ../index.js.
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

