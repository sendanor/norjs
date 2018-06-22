
### Preserved NorJS object methods

We use special methods to detect features in an NorJS object.

Every method starts with a prefix `nor`, eg. `.norName()`, so it will not 
affect how you name your own methods. See also our 
[Naming Policy](./NamingPolicy.md).

You can and should override these methods in your own derived classes to 
customize functionality.

#### Information about the class

##### `.norName()`

This method returns an unique name of the NorJS class as a `string`.

It can be used on both as a static method (called on the class constructor) as 
well as on any instance object. 

##### `.norType()`

Returns the type of this NorJS class, as a `string`.

It can be:

 - `"AbstractClass"` for abstract classes (default)
 - `"Class"` for classes in general
 - `"Service"` for services
 - `"Controller"` for controllers in general
 - `"Component"` for components
 - `"Directive"` for directives
 - `"Filter"` for filters
 - `"Factory"` for factories
 - `"Module"` for modules

You should override this in your abstract implementations if the type changes 
from the parent class.

Usually you don't need to implement it if you are using our abstract 
classes.

It can be used on both as a static method (called on the class constructor) as 
well as on any instance object. 

##### `.norClass()`

Returns the class constructor.

It can be used on both as a static method (called on the class constructor) as 
well as on any instance object. 

### Information about the HTML element

#### `.norTagName()`

Returns the HTML tag name of this element as a `string`.

#### `.norTemplate()`

Returns the HTML template as a `string` for this element.

This template is identical to AngularJS template.

#### `.norBindings()`

Returns an `object` which tells the system how to map your element attributes 
to the controller member variables.

This follows the same format as in AngularJS.

### Life cycle handlers

#### Life cycle handlers

**Note!** Our event handlers are special in a way that you don't need to call
 the super implementation yourself. This reduces accidental memory leak 
 problems, and changing abstract implementations is a lot easier.

Our framework will call each implementation in a correct order automatically.
 (Reversed when destroying.)

**Note!** You can override this automatic functionality by overriding 
`.norDoInit()` or `.norDoDestroy()`, but don't do it without a good reason.

#### `.norInit()`

Triggered when the object is initialized.

You may also return a promise.

This is same as AngularJS `.$onInit()`, except we will support it on any 
object.

#### `.norDestroy()`

Triggered when the object is destroyed.

You may also return a promise.

This is same as AngularJS `.$onDestroy()`, except we will support it on any 
object.

#### `.norChanges(changes)`

Triggered when values binded to the controller has been changed.

You may also return a promise.

This is same as AngularJS `.$onChanges()`.

#### Life cycle handler implementations

These are default implementations for triggering life cycle operations. 

Usually you don't need to override these.  Use `.norInit()` and `.norDestroy()` 
instead.

#### `.norDoInit()`

This method is called by the framework when the object must be initialised.

You may also return a promise.

**Note!** You need to make sure each `.norInit()` implementation 
is called, or call a `super.norDoInit()`, which does that for you.

#### `.norDoDestroy()`

This method is called by the framework when the object must be destroyed.

You may also return a promise.

**Note!** You need to make sure each `.norDestroy()` implementation 
is called, or call a `super.norDoDestroy()`, which does that for you.

#### `.norDoChanges(changes)`

Same as AngularJS `$onChanges()`.

You may also return a promise.

**Note!** You need to make sure each `.norChanges()` implementation 
is called, or call a `super.norChanges()`, which does that for you.
