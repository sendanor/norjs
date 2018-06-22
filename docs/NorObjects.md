
### Preserved NorJS object methods

We use special methods to detect features in an NorJS object.

Every method starts with a prefix `nor`, eg. `.norName()`, so it will not 
affect how you name your own methods. See also our [Naming Policy](
./NamingPolicy.md).

You can and should override these methods in your own derived classes to 
customize functionality.

#### Information about the class

##### `.norName()`

This method returns an unique name of the NorJS class.

It can be used on both as a static method (called on the class constructor) as 
well as on any instance object. 

##### `.norType()`

Returns the type of this NorJS class.

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

Returns the HTML tag name of this element.

#### `.norTemplate()`

Returns the HTML template as a string for this element.

Template is identical to AngularJS template.

#### `.norBindings()`

Returns an object which tells the system how to map your element attributes 
to the controller member variables.

This follows the same format as in AngularJS.

### Life cycle handlers

#### Life cycle handlers

**Note!** Our event handlers are special in way that you don't need to call 
super implementation yourself. This reduces memory leak problems.

Our framework will call each implementation in a correct order automatically.

You can override that functionality by overriding `.norDoInit()` or 
`.norDoDestroy()`, but don't do it without a good reason.

#### `.norInit()`

Triggered when the object is initialized.

This is same as AngularJS `.$onInit()`, except we will support it on any 
object.

#### `.norDestroy()`

Triggered when the object is destroyed.

This is same as AngularJS `.$onDestroy()`, except we will support it on any 
object.

#### `.norChanges(changes)`

Triggered when values binded to the controller has been changed.

This is same as AngularJS `.$onChanges()`.

#### Life cycle handler implementations

These are default implementations for triggering life cycle operations. 

Usually you don't need to override these.  Use `.norInit()` and `.norDestroy
()` instead.

#### `.norDoInit()`

This method is called by the framework when the object must be initialised.

**Note!** You need to remember to make sure each `.norInit()` implementation 
is called, or call a `super.norDoInit()`, which does that for you.

#### `.norDoDestroy()`

This method is called by the framework when the object must be destroyed.

**Note!** You need to remember to make sure each `.norDestroy()` implementation 
is called, or call a `super.norDoDestroy()`, which does that for you.

#### `.norDoChanges(changes)`

Same as AngularJS `$onChanges()`.

**Note!** You need to remember to make sure each `.norChanges()` implementation 
is called, or call a `super.norChanges()`, which does that for you.
