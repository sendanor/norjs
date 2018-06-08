import 'babel-polyfill'
import assert from 'assert';
import AbstractObjectFactory from '../lib/core/AbstractObject';
import AbstractServiceFactory from '../lib/core/AbstractService';
import AbstractModuleServiceFactory from '../lib/core/AbstractModuleService';
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
	 * @type {AbstractModuleService}
	 */
	let AbstractModuleService;

	/**
	 * @type {ModuleService}
	 */
	let ModuleService;

	beforeEach( () => {
		AbstractObject = AbstractObjectFactory();
		AbstractService = AbstractServiceFactory(AbstractObject);
		AbstractModuleService = AbstractModuleServiceFactory(AbstractService);
		ModuleService = new (ModuleServiceFactory(AbstractModuleService))();
	});

	afterEach( () => {
		AbstractObject = undefined;
		AbstractService = undefined;
		AbstractModuleService = undefined;
		ModuleService = undefined;
	});

	describe('#register', () => {

		it('can register a class', () => {

			class Foo {

				static getNorType () {
					return "Class";
				}

				static getNorName () {
					return "Foo";
				}
			}

			ModuleService.register(Foo);

			assert.equal(ModuleService.get("Foo"), Foo);

		});

		it('can register a factory', () => {

			class OrigFoo {

				static getNorType () {
					return "Class";
				}

				static getNorName () {
					return "Foo";
				}
			}

			function FooFactory () {
				return OrigFoo;
			}

			ModuleService.register(FooFactory);

			const Foo = ModuleService.get("Foo");
			assert.equal(OrigFoo, Foo);

		});
	});

	describe('#get', () => {

		it('can get a registered module', () => {

			class Foo {

				static getNorType () {
					return "Class";
				}

				static getNorName () {
					return "Foo";
				}
			}

			ModuleService.register(Foo);

			assert.equal(ModuleService.get("Foo"), Foo);

		});

	});

	describe('#getAll', () => {

		it('can get multiple registered modules using an array', () => {

			class Foo {

				static getNorType () {
					return "Class";
				}

				static getNorName () {
					return "Foo";
				}
			}

			class Bar {

				static getNorType () {
					return "Class";
				}

				static getNorName () {
					return "Bar";
				}
			}

			ModuleService.register(Foo, Bar);

			const tmp = ModuleService.getAll(["Foo", "Bar"]);

			assert.equal(tmp.length, 2);
			assert.equal(tmp[0], Foo);
			assert.equal(tmp[1], Bar);

		});

		it('can get multiple registered modules using multiple variables', () => {

			class Foo {

				static getNorType () {
					return "Class";
				}

				static getNorName () {
					return "Foo";
				}
			}

			class Bar {

				static getNorType () {
					return "Class";
				}

				static getNorName () {
					return "Bar";
				}
			}

			ModuleService.register(Foo, Bar);

			const tmp = ModuleService.getAll("Foo", "Bar");

			assert.equal(tmp.length, 2);
			assert.equal(tmp[0], Foo);
			assert.equal(tmp[1], Bar);

		});


	});

	describe('#has', () => {

		it('can check if registered module exists', () => {

			class Foo {

				static getNorType () {
					return "Class";
				}

				static getNorName () {
					return "Foo";
				}

			}

			ModuleService.register(Foo);

			assert.equal(ModuleService.has("Foo"), true);
			assert.equal(ModuleService.has("Bar"), false);

		});

		it('can check if module does not exist', () => {
			assert.equal(ModuleService.has("Foo"), false);
			assert.equal(ModuleService.has("Bar"), false);
		});

	});

});
