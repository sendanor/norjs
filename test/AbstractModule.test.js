import 'babel-polyfill'
import assert from 'assert';

let libDir = process.env.ENABLE_COVERAGE ? '../lib-cov' : '../lib';
let AbstractObjectFactory = require(libDir+'/core/AbstractObject').default;
let AbstractServiceFactory = require(libDir+'/core/AbstractService').default;
let AbstractModuleServiceFactory = require(libDir+'/core/AbstractModuleService').default;
let ModuleServiceFactory = require(libDir+'/core/ModuleService').default;
let AbstractModuleFactory = require(libDir+'/core/AbstractModule').default;

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
