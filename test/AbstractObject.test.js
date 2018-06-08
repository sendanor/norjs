import 'babel-polyfill'
import assert from 'assert';
import AbstractObjectFactory from '../lib/core/AbstractObject.js';

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
