ScriptInclude
=============

ScriptInclude allows you to asynchronously load `script` tags into the browser. I made it because I wanted a `#include` statement like other languages have, so I did my best to recreate that.

ScriptInclude aims to be _tiny_ and easy to understand. There is no dependency management or anything.

There is now a IE6+ compatible version called `include.ie.js`

It's meant to be minified and inlined, like so:

```html
<html>
<!-- ... -->
<body>

  <!-- ... -->

  <script>

  // ScriptInclude, minified and inlined
  $i=window.include=function(){var a=arguments,n=a.length,c=a[n-1],s,i,d=document;if(c.call)n--;
  function l(){n--;if(!n&&c.call)c()}for(i=0;i<n;i++){s=d.createElement("script");s.src=a[i];
  s.onload=s.onerror=l;d.getElementsByTagName('head')[0].appendChild(s)}};

  // my stuff
  include('jquery.js', function() {
    include('main.js');
  });
  
  // or
  $i('jquery.js', function() {
    $i('main.js');
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
or
```javascript
$i('library.js', function() {
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
or
```javascript
$i('underscore.js', 'backbone.js', function() {
  // Underscore and Backbone are loaded in, let's go for it
});
```

You can include as many files as you want.

