import 'babel-polyfill'
import assert from 'assert';
import AbstractObjectFactory from '../lib/core/AbstractObject';
import AbstractServiceFactory from '../lib/core/AbstractService';

describe('AbstractService', () => {

	let AbstractObject, AbstractModule, AbstractService;

	beforeEach( () => {
		AbstractObject = AbstractObjectFactory();
		AbstractService = AbstractServiceFactory(AbstractObject);
	});

	afterEach( () => {
		AbstractModule = undefined;
		AbstractService = undefined;
	});

	describe('#constructor', () => {

		it('can be used to create concrete class', () => {

			class FooService extends AbstractService {
				static getNorName () {
					return "FooService";
				}
			}

			let foo = new FooService();

			assert.equal(foo.norName, "FooService");
			assert.equal(foo.getNorName(), "FooService");

		});
	});
});
