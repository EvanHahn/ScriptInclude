ScriptInclude
=============

ScriptInclude allows you to asynchronously load `script` tags into the browser. I made it because I wanted a `#include` statement like other languages have, so I did my best to recreate that.

ScriptInclude aims to be _tiny_ and easy to understand. There is no dependency management or anything.

It's meant to be minified and inlined, like so:

```html
<html>
<!-- ... -->
<body>

  <!-- ... -->

  <script>

  // ScriptInclude, minified and inlined
  window.include=function(){function f(){b--;b||c()}var a=arguments,d=document,b=a.length,c;
  arguments[b-1]instanceof Function?(b--,c=a[a.length-1]):c=function(){};
  for(var e=0;e<b;e++)a=d.createElement("script"),a.src=arguments[e],a.onload=a.onerror=f,
  (d.head||d.getElementsByTagName("head")[0]).appendChild(a)};

  // my stuff
  include('jquery.js', function() {
    include('main.js');
  });

  </script>

</body>
</html>
```

Some example usage
------------------

### Include a single file ###

```javascript
include('library.js', function() {
  // library.js has been loaded, now we can use it
});
```

Callbacks are optional.

### Include multiple files ###

```javascript
include('underscore.js', 'backbone.js', function() {
  // Underscore and Backbone are loaded in, let's go for it
});
```

You can include as many files as you want.
