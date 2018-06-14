/**
 * Abstract base class for NorJS services
 *
 * @ngInject
 * @param AbstractObject {AbstractObject}
 * @return {AbstractController}
 */
export default function AbstractControllerFactory (AbstractObject) {

	return class AbstractController extends AbstractObject {

		static getType () {
			return "Controller";
		}

		static getName () {
			return "AbstractController";
		}

		static getTagName () {
			throw new Error("" + this.getName() + ".getTagName() not defined");
		}

		static getTemplate () {
			return "";
		}

		static getBindings () {
			return {};
		}

	};

}

