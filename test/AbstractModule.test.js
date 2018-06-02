import 'babel-polyfill'
import assert from 'assert';
import AbstractObjectFactory from '../lib/core/AbstractObject';
import AbstractModuleFactory from '../lib/core/AbstractModule';
import ModuleServiceFactory from '../lib/core/ModuleService';
import AbstractServiceFactory from '../lib/core/AbstractService';

describe('AbstractModule', () => {

	let AbstractObject, AbstractModule, ModuleService, AbstractService;

	beforeEach( () => {
		AbstractObject = AbstractObjectFactory();
		AbstractService = AbstractServiceFactory(AbstractObject);
		ModuleService = new (ModuleServiceFactory(AbstractService))();
		ModuleService.register("AbstractObject", AbstractObject);
		AbstractModule = AbstractModuleFactory(ModuleService);
	});

	afterEach( () => {
		AbstractModule = undefined;
		AbstractService = undefined;
		ModuleService = undefined;
		AbstractModule = undefined;
	});

	describe('#constructor', () => {

		it('can be used to create concrete class', () => {

			class FooModule extends AbstractModule {
				constructor () {
					super("FooModule");
				}
			}

			let foo = new FooModule();

			assert.equal(foo.norName, "FooModule");
			assert.equal(foo.getNorName(), "FooModule");

		});
	});
});
