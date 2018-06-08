import AbstractObjectFactory from './AbstractObject';
import AbstractServiceFactory from './AbstractService';
import AbstractModuleServiceFactory from './AbstractModuleService';
import ModuleServiceFactory from './ModuleService';

import AbstractModuleFactory from './AbstractModule';
import ModuleFactory from './Module';

/**
 * @type {typeof AbstractObject}
 */
export const AbstractObject = AbstractObjectFactory();

/**
 * @type {typeof AbstractService}
 */
export const AbstractService = AbstractServiceFactory(AbstractObject);

/**
 * @type {typeof AbstractModuleService}
 */
export const AbstractModuleService = AbstractModuleServiceFactory(AbstractService);

/**
 * @type {ModuleService}
 */
export const ModuleService = new (ModuleServiceFactory(AbstractModuleService))();

ModuleService.register(
	  AbstractObject
	, AbstractService
	, AbstractModuleService
	, ModuleService
	, AbstractModuleFactory
	, ModuleFactory
);

/**
 * NorJS Module class
 *
 * @type {typeof Module}
 */
export const Module = ModuleService.get("Module");

export default class NorJS extends AbstractObject {

	static getNorName () {
		return "NorJS";
	}

	static module (...args) {
		return new Module(...args);
	}

};