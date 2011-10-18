ScriptInclude v1.0
==================

ScriptInclude allows you to asynchronously load `script` tags into the browser. I made it because I wanted a `#include` statement like other languages have, so I did my best to recreate that.

Some example usage
------------------

### Include a single file ###

```javascript
ScriptInclude.include('library.js', function() {
	// library.js has been loaded, now we can use it
});
```

Callbacks are optional but recommended.

### Include multiple files ###

```javascript
ScriptInclude.include('backbone.js', 'jquery.js', function() {
	// Backbone and jQuery are loaded in, let's go for it
});
```

You can include as many files as you want.

### Include predefined libraries ###

```javascript
ScriptInclude.include('jquery', function() {
	// jQuery has been loaded
});

ScriptInclude predefines the following libraries:
* jQuery
* Prototype
* Handlebars

### Define your own includes ###

```javascript
ScriptInclude.defineIncludes({
	'myLibrary': 'mygreatlib.js',
	'three': 'three.js'
});
ScriptInclude.include('three', 'myLibrary');
```

You can execute the `defineIncludes()` function as many times as you like, though only one usage is recommended.

### Overwrite the default includes ###

```javascript
ScriptInclude.defineIncludes({
	'jquery': '/my/path/to/jquery.js'
});
ScriptInclude.include('jquery');
```

### Is the queue loaded? ###

```javascript
var queue = ScriptInclude.include('mylibrary.js');
if (ScriptInclude.isQueueLoaded(queue)) {
	// It probably won't get here because the library hasn't loaded
}
```

This is an alternative to using callbacks, but is not recommended for most cases. A possible use case: I want to run my game's physics engine, even if the graphics engine hasn't finished loading.

Licensing
---------

ScriptInclude is licensed under the MIT License. More info can be found in the LICENSE file.
