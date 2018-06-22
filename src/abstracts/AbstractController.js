import _ from 'lodash';

/**
 * Abstract base class for NorJS services
 *
 * @ngInject
 * @param AbstractObject {AbstractObject}
 * @return {AbstractController}
 */
export default function AbstractControllerFactory (AbstractObject) {

	return class AbstractController extends AbstractObject {

		static norType () {
			return "Controller";
		}

		static norName () {
			return "AbstractController";
		}

		static norTagName () {
			throw super.norError(".norTagName() not defined");
		}

		static norTemplate () {
			return "";
		}

		static norBindings (opts={}) {
			return _.merge({}, opts);
		}

	};

}

