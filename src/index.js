import AbstractObjectFactory from './abstracts/AbstractObject';
const AbstractObject = AbstractObjectFactory();

import AbstractServiceFactory from './abstracts/AbstractService';
const AbstractService = AbstractServiceFactory(AbstractObject);

import ModuleServiceFactory from './services/ModuleService';
const ModuleService = ModuleServiceFactory(AbstractService)
	.register("AbstractObject", AbstractObject);

import AbstractModuleFactory from './abstracts/AbstractModule';
ModuleService.registerFactory("AbstractModule", AbstractModuleFactory);

import ModuleFactory from './objects/Module';
ModuleService.registerFactory("Module", ModuleFactory);

/**
 * NorJS module
 *
 * @type {Module}
 */
const norjs = new Module("norjs");

export default norjs;
