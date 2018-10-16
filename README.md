
***Warning!*** This project is not the same as our newer commercial NorJS project at www.norjs.com.

It has been just left here for history. *This repository is not in active development.*

-------------------------------------------

[![view on npm](http://img.shields.io/npm/v/norjs.svg)](https://www.npmjs.org/package/norjs)
[![npm module downloads](http://img.shields.io/npm/dt/norjs.svg)](https://www.npmjs.org/package/norjs)
[![Build Status](https://travis-ci.org/sendanor/norjs.svg?branch=master)](https://travis-ci.org/sendanor/norjs)
[![Coverage Status](https://coveralls.io/repos/github/sendanor/norjs/badge.svg?branch=master)](https://coveralls.io/github/sendanor/norjs?branch=master)
[![Dependency Status](https://david-dm.org/sendanor/norjs.svg)](https://david-dm.org/sendanor/norjs)
[![Bountysource](https://img.shields.io/bountysource/team/norjs/activity.svg)](https://www.bountysource.com/teams/norjs)

# NorJS -- Full Stack Framework

**Note:** *This framework is not yet finished.* 

It has working module system, but it still lacks a lot of features. 

## Requirements

For development, you will only need NPM installed on your environment.

<!-- FIXME: Add a link to Node installation guide -->

## Install

    $ npm install --save-dev norjs
 
## Get source code

    $ git clone https://github.com/sendanor/norjs.git
    $ cd norjs

## Tutorial

### Example usage

#### A service our component will use as `BarService.js`

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

#### Component's implementation as `FooController.js`

```javascript

/** 
 * @FIXME If anyone has a good idea how to put styles into the controller class, I'd be happy to hear about it
 */
import "foo-styles.scss";

import template from "./foo-template.html";

/** 
 * You start by defining a factory function.
 * 
 * It is a lot like in AngularJS, except our module system is quite different. 
 * 
 * It is dynamic, modules can be plugged in, and removed, and each element is event observable. There is also no providers.
 * 
 * When you register a module, there is no promise that it would be available instantly -- for example in case of 
 * a missing dependency. However you can listen for an event until it is ready. The module will be loaded automatically 
 * once required dependencies are available.
 * 
 * @ngInject
 */
export default FooFactory (BarService, AbstractController) {
    
    
    /** The factory function can return anything.
     * 
     * There is ready to use abstract classes for everything.
     */
    return class FooController extends AbstractComponentController {
        
        /**
         * You start by defining a name for the class.
         * 
         * This cannot be automatically detected from the class name because it might be obscured by a minifier.
         * 
         * Also, you might want to control which name it will have. This name will be used as an unique keyword for this
         * class in LoggingService and other built-in and user-defined solutions.
         */
        static getNorName () {
            return "Foo";
        }
        
        /**
         * This is how you can define how this component will be defined as a tag. 
         * 
         * Eg. `norFoo` will be `<nor-foo></nor-foo>`
         */
        static getTagName () {
            return "norFoo";
        }
        
        /**
         * Here you can define a static method which returns the template.
         * 
         * You may also override it in the derived classes if you need to.
         * 
         * With AngularJS, this will be passed as the template property to the configuration.
         * 
         * @returns {string}
         */
        static getTemplate () {
            return template;
        }
        
        /** 
         * You can control which bindings will be defined for this controller.
         * 
         * When using AngularJS, this can be passed as is to the `bindToController` (for controllers) or `bindings` (for 
         * component) configurations.
         * 
         * By calling super.getBindings() you can control which bindings the extended class defines and override if 
         * necessary. This is normal ES6 inheritanze.
         * 
         * @returns {object}
         */
        static getBindings () {
            return _.merge({}, super.getBindings(), {
                "_onClick": "&onClick",
                "_value": "<model"
            });
        }
        
        /** Here is standard constructor for this component */
        constructor () {
            super();
            
            /** 
             * @member {BarInstance}
             */
            this._something = BarService.init();
        }
    
        /** 
         * Here we define a getter function for our value, because calling another depended service directly from a 
         * template is very bad style.
         */
        get value () {
            return this._something.getValue();
        }
        
        /** 
         * Let's also have a setter function. This way we can detect if our template changes the model.
         */
        set value (value) {
            this._something.setValue(value);
        }
        
        /** 
         * This method is very special one. You don't need to call super here, even if the parent has a implementation, 
         * because the framework will call each defined `.onInit()` implementation automatically.
         * 
         * @FIXME: There will be a way to override this functionality, but it is not yet decided which method name it 
         * will have.
         */
        onInit () {
            this._something.setValue(this._value);
        }
        
        /** 
         * `.onDestroy()` works the same way as `.onInit()`. 
         * 
         * You can trust that the framework calls every implemented destructor function automatically.
         */
        onDestroy () {
            // ...
            this._something.destroy();
        }
        
        /** 
         * This method also uses the same system as `.onInit()` and `.onDestroy()`.
         */
        onChanges (changes) {
            // ...
            
            if (changes._value) {
                this._something.setValue(this._value);
            }
        }
        
        /** 
         * Here we define a function which the template can use when something is clicked. 
         * 
         * Because we didn't define &-binding optional in our static `.getBindings()`, we can trust that `this._onClick` 
         * points to a no-op function by default. You may define it as optional with a `?` after the `&`.
         */
        click () {
            this._onClick({value: this._something.getValue()});
        }
        
    }
}
```

#### Component's template as `foo-template.html`

```html
<nor-text-input model="$ctrl.value"></nor-text-input>
<nor-button on-click="$ctrl.click()" label="common.save"></nor-button>
```

#### Your template

```html
<nor-foo model="$ctrl.fooModel" on-click="$ctrl.saveModel(value)"></nor-foo>
```

### Configure

### Code

### Build

## Languages & tools

