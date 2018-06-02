import AbstractObjectFactory from './core/AbstractObject';
import AbstractServiceFactory from './core/AbstractService';
import ModuleServiceFactory from './core/ModuleService';
import ModuleFactory from './core/Module';
import AbstractModuleFactory from './core/AbstractModule';
import AbstractsModule from './abstracts/index';
import CommonModule from './common/index';
import ObjectsModule from './objects/index';
import ServicesModule from './services/index';

const AbstractObject = AbstractObjectFactory();
const AbstractService = AbstractServiceFactory(AbstractObject);
const ModuleService = ModuleServiceFactory(AbstractService);

ModuleService.service("ModuleService", ModuleService);
ModuleService.abstractClass("AbstractObject", AbstractObject);
ModuleService.abstractClass("AbstractService", AbstractService);
ModuleService.factory("AbstractModule", AbstractModuleFactory);
ModuleService.factory("Module", ModuleFactory);

const Module = ModuleService.get("Module");

/**
 * NorJS module
 *
 * @type {Module}
 */
const norjs = new Module("norjs", [
	AbstractsModule,
	CommonModule,
	ObjectsModule,
	ServicesModule
]);

export default norjs;
