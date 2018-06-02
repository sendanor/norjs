import 'babel-polyfill'
import assert from 'assert';
import AbstractObjectFactory from '../lib/core/AbstractObject';
import AbstractServiceFactory from '../lib/core/AbstractService';
import ModuleServiceFactory from '../lib/core/ModuleService';

describe('ModuleService', () => {

	/**
	 *
	 * @type {AbstractObject}
	 */
	let AbstractObject;

	/**
	 *
	 * @type {AbstractService}
	 */
	let AbstractService;

	/**
	 * @type {ModuleService}
	 */
	let ModuleService;

	beforeEach( () => {
		AbstractObject = AbstractObjectFactory();
		AbstractService = AbstractServiceFactory(AbstractObject);
		ModuleService = new (ModuleServiceFactory(AbstractService))();
	});

	afterEach( () => {
		AbstractObject = undefined;
		AbstractService = undefined;
		ModuleService = undefined;
	});

	describe('#register', () => {

		it('can register an instance', () => {

			class Foo {}

			ModuleService.register("Foo", Foo);

			assert.equal(ModuleService.get("Foo"), Foo);

		});
	});

	describe('#registerFactory', () => {

		it('can register a factory', () => {

			class OrigFoo {}

			function FooFactory () {
				return OrigFoo;
			}

			ModuleService.registerFactory("Foo", FooFactory);

			const Foo = ModuleService.get("Foo");

			assert.equal(OrigFoo, Foo);

		});
	});

	describe('#get', () => {

		it('can get a registered module', () => {

			class Foo {}

			ModuleService.register("Foo", Foo);

			assert.equal(ModuleService.get("Foo"), Foo);

		});
	});

	describe('#has', () => {

		it('can check if registered module exists', () => {

			class Foo {}

			ModuleService.register("Foo", Foo);

			assert.equal(ModuleService.has("Foo"), true);
			assert.equal(ModuleService.has("Bar"), false);

		});

		it('can check if module does not exist', () => {
			assert.equal(ModuleService.has("Foo"), false);
			assert.equal(ModuleService.has("Bar"), false);
		});

	});

});
