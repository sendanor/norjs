import norjs from 'norjs';

import FormModule from './form/index';
import MenuModule from './menu/index';
import ViewModule from './view/index';

export default norjs.module('norjs.common',
	[
		FormModule,
		MenuModule,
		ViewModule
	])
	.name;
