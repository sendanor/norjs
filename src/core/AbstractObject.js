/** Abstract base class for all NorJS objects
 *
 * **Note!** This class is being used manually to boostrap NorJS module system. See more at ../index.js.
 *
 * @ngInject
 * @return {AbstractObject}
 */
export default function AbstractObjectFactory (nor, NorObjectMixin, ObservableMixin, ErrorMixin) {

	return class AbstractObject extends nor.fuse(NorObjectMixin, ObservableMixin, ErrorMixin) {
	};

}

