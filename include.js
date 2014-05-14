include = function() {

	var args = arguments;
	var doc = document;

	var toLoad = args.length;
  var lastArgument = args[toLoad - 1];
	var hasCallback = lastArgument.call;
	var script;

	function onloaded() {
		toLoad --;
		if (!toLoad && hasCallback) {
			lastArgument();
		}
	}

	if (hasCallback) {
		toLoad --;
	}

	for (var i = 0; i < toLoad; i ++) {

		script = doc.createElement('script');
		script.src = arguments[i];
		script.onload = script.onerror = onloaded;
		(
			doc.head ||
			doc.getElementsByTagName('head')[0]
		).appendChild(script);

	}

};
