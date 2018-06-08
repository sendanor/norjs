import 'babel-polyfill'
import assert from 'assert';
import AbstractObjectFactory from '../lib/core/AbstractObject';
import AbstractModuleFactory from '../lib/core/AbstractModule';
import ModuleServiceFactory from '../lib/core/ModuleService';
import AbstractModuleServiceFactory from '../lib/core/AbstractModuleService';
import AbstractServiceFactory from '../lib/core/AbstractService';
import ModuleFactory from '../lib/core/Module';

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
