include = function() {

	var args = arguments;
	var doc = document;

	var toLoad = args.length;
	var callback;
	var hasCallback = args[toLoad - 1] instanceof Function;
	var script;

	function onloaded() {
		toLoad --;
		if (!toLoad && callback) {
			callback();
		}
	}

	if (hasCallback) {
		toLoad --;
		callback = arguments[arguments.length - 1];
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
