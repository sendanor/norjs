import 'babel-polyfill'
import assert from 'assert';

let libDir = process.env.ENABLE_COVERAGE === "true" ? '../lib-cov' : '../lib';
let AbstractObjectFactory = require(libDir+'/core/AbstractObject').default;
let AbstractServiceFactory = require(libDir+'/core/AbstractService').default;

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
