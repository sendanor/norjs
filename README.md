[![view on npm](http://img.shields.io/npm/v/norjs.svg)](https://www.npmjs.org/package/norjs)
[![npm module downloads](http://img.shields.io/npm/dt/norjs.svg)](https://www.npmjs.org/package/norjs)
[![Build Status](https://travis-ci.org/sendanor/norjs.svg?branch=master)](https://travis-ci.org/sendanor/norjs)
[![Coverage Status](https://coveralls.io/repos/github/sendanor/norjs/badge.svg?branch=master)](https://coveralls.io/github/sendanor/norjs?branch=master)
[![Dependency Status](https://david-dm.org/sendanor/norjs.svg)](https://david-dm.org/sendanor/norjs)
[![Bountysource](https://img.shields.io/bountysource/team/norjs/activity.svg)](https://www.bountysource.com/teams/norjs)

# NorJS -- Full Stack Framework

**Note:** *This framework is not yet finished.* 

It has working module system, but it still lacks a lot of features. 

You can <a href="https://www.bountysource.com/teams/norjs">help us</a> finish it, and earn some bounties while doing that.

## Requirements

For development, you will only need NPM installed on your environment.

<!-- FIXME: Add a link to Node installation guide -->

## Install

    $ npm install --save-dev norjs
 
## Get source code

    $ git clone https://github.com/sendanor/norjs.git
    $ cd norjs

## Tutorial

### BarService.js

```javascript
export default BarServiceFactory (AbstractService) {

    class BarInstance {

		getValue () {
			return this._value;
		}
		
		setValue (value) {
			this._value = value;
		}
    	
		destroy () {
			// ...
		}
		
    }

	return class BarService extends AbstractController {
		
    	/** 
    	 * @returns {BarInstance}
    	 */
    	init () {
    		return new BarInstance();
    	}
		
	};
}
```

### FooController.js

```javascript
import "foo-styles.scss";
import template from "./foo-template.html";

export default FooFactory (BarService, AbstractController) {
	return class FooController extends AbstractController {
    	
    	static getTemplate () {
    		return template;
    	}
    	
    	static getBindings () {
    		return _.merge({}, super.getBindings(), {
    			"_onClick": "&onClick",
    			"_value": "<value"
    		});
    	}
    	
    	constructor () {
    		super();
    		
    		/** 
    		 * @member {BarInstance}
    		 */
    		this._something = BarService.init();
    	}
    
    	get value () {
    		return this._something.getValue();
    	}
    	
    	onInit () {
    		this._something.setValue(this._value);
    	}
    	
    	onDestroy () {
    		// ...
    		this._something.destroy();
    	}
    	
    	onChanges (changes) {
    		// ...
    		
    		if (changes._value) {
    			this._something.setValue(this._value);
    		}
    	}
    	
    	click () {
    		this._onClick({value: this._something.getValue()});
    	}
    	
    }
}
```
    
### Configure

### Code

### Build

## Languages & tools

