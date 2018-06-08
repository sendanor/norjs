import 'babel-polyfill'
import assert from 'assert';

let libDir = process.env.ENABLE_COVERAGE ? '../lib-cov' : '../lib';
let AbstractObjectFactory = require(libDir+'/core/AbstractObject').default;

describe('AbstractObject', () => {

	let AbstractObject;

	beforeEach( () => {
		AbstractObject = AbstractObjectFactory();
	});

	afterEach( () => {
		AbstractObject = undefined;
	});

	describe('#constructor', () => {

		it('can be used to create concrete class', () => {

			class FooClass extends AbstractObject {
				static getNorName () {
					return "FooClass";
				}
			}

			let foo = new FooClass();

			assert.equal(foo.norName, "FooClass");
			assert.equal(foo.getNorName(), "FooClass");

		});
	});
});
