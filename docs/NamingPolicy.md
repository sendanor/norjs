
### NorJS Naming Policy

#### Naming classes

##### Abstract classes

Abstract class name must start with `Abstract`, eg. `AbstractComponent`.

##### Components

Component name should be suffixed to `Component`, eg. `TextComponent`.

##### Modals

Modal name should be suffixed to `Modal`, eg. `TextModal`.

##### Services

Service name should be suffixed to `Service`, eg. `TextService`.

##### Factory

Factory name should be suffixed to `Factory`, eg. `TextFactory`.

##### Utilities

Utility is a service which doesn't have a state of its own. It usually is just a set of different functions to perform 
common logic.

Utility name should be suffixed to `Utils`, eg. `TextUtils`.

##### Directives 

Directive name should be suffixed to `Directive`, eg `TextDirective`.

##### Views 

View name should be suffixed to `View`, eg `ExampleView`.

##### Modules 

Module name should be suffixed to `Module`, eg `TextModule`.

##### Filters 

Filter name should be suffixed to `Filter`, eg `TextFilter`.

##### Controllers

Any other controller name should be suffixed to `Controller`, eg. `TextController`, except if it has a common abstract 
class, in which case it should follow the name of the abstract class.

#### Naming variables, methods and functions 

##### Private names

Private properties must start with a single underscore (`_`).

Names starting with two or more underscores are preserved for abstract private properties, and other NorJS framework 
specific private properties.

##### Protected names

Protected abstract properties should start with only one underscore.

##### Tag names

NorJS tags will start a prefix `nor-`. **Do not use our prefix for your own tags.** 

Your project should have your own prefix.
