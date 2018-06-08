import 'babel-polyfill'
import assert from 'assert';

let libDir = process.env.ENABLE_COVERAGE ? '../lib-cov' : '../lib';
let AbstractObjectFactory = require(libDir+'/core/AbstractObject').default;
let AbstractServiceFactory = require(libDir+'/core/AbstractService').default;
let AbstractModuleServiceFactory = require(libDir+'/core/AbstractModuleService').default;
let ModuleServiceFactory = require(libDir+'/core/ModuleService').default;
let AbstractModuleFactory = require(libDir+'/core/AbstractModule').default;
let ModuleFactory = require(libDir+'/core/Module').default;

describe('Module', () => {

	/**
	 * @type {AbstractObject}
	 */
	let AbstractObject;

	/**
	 * @type {AbstractService}
	 */
	let AbstractService;

	/**
	 * @type {AbstractModuleService}
	 */
	let AbstractModuleService;

	/**
	 * @type {ModuleService}
	 */
	let ModuleService;

	/**
	 * @type {Module}
	 */
	let Module;

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
			, ModuleFactory
		);

		Module = ModuleService.get('Module');
	});

	afterEach( () => {
		AbstractObject = undefined;
		AbstractService = undefined;
		AbstractModuleService = undefined;
		ModuleService = undefined;
		Module = undefined;
	});

	describe('#constructor', () => {

		it('can be used to create module instance', () => {

			let foo = new Module("test.foo.module", []);

			assert.equal(foo.norName, "Module");
			assert.equal(foo.getNorName(), "Module");

		});
	});
});
