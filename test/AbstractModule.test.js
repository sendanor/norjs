import 'babel-polyfill'
import assert from 'assert';
import AbstractObjectFactory from '../lib/core/AbstractObject';
import AbstractServiceFactory from '../lib/core/AbstractService';
import AbstractModuleServiceFactory from '../lib/core/AbstractModuleService';
import ModuleServiceFactory from '../lib/core/ModuleService';
import AbstractModuleFactory from '../lib/core/AbstractModule';

describe('AbstractModule', () => {

	/**
	 * @type {AbstractObject}
	 */
	let AbstractObject;

	/**
	 * @type {AbstractService}
	 */
	let AbstractService;

	/**
	 * @type {ModuleService}
	 */
	let ModuleService;

	/**
	 * @type {AbstractModule}
	 */
	let AbstractModule;

	/**
	 * @type {AbstractModuleService}
	 */
	let AbstractModuleService;

	beforeEach( () => {
		AbstractObject = AbstractObjectFactory();
		AbstractService = AbstractServiceFactory(AbstractObject);
		AbstractModuleService = AbstractModuleServiceFactory(AbstractService);
		ModuleService = new (ModuleServiceFactory(AbstractModuleService))();
		ModuleService.register(
			  AbstractObject
			, AbstractService
			, AbstractModuleService
			, ModuleService
			, AbstractModuleFactory
		);

		AbstractModule = ModuleService.get('AbstractModule');
	});

	afterEach( () => {
		AbstractObject = undefined;
		AbstractService = undefined;
		ModuleService = undefined;
		AbstractModule = undefined;
		AbstractModuleService = undefined;
	});

	describe('#constructor', () => {

		it('can be used to create concrete class', () => {

			class FooModule extends AbstractModule {
				static getNorName () {
					return "FooModule";
				}
			}

			let foo = new FooModule();

			assert.equal(foo.norName, "FooModule");
			assert.equal(foo.getNorName(), "FooModule");

		});
	});
});
