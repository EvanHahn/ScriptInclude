ScriptInclude
=============

ScriptInclude allows you to asynchronously load `script` tags into the browser. I made it because I wanted a `#include` statement like other languages have, so I did my best to recreate that.

ScriptInclude aims to be _tiny_ and easy to understand. There is no dependency stuff or anything.

Some example usage
------------------

### Include a single file ###

```javascript
include('library.js', function() {
	// library.js has been loaded, now we can use it
});
```

Callbacks are optional but recommended.

### Include multiple files ###

```javascript
include('underscore.js', 'backbone.js', function() {
	// Underscore and Backbone are loaded in, let's go for it
});
```

You can include as many files as you want.

Licensing
---------

ScriptInclude is licensed under the Unlicense. More info can be found in LICENSE.txt.
