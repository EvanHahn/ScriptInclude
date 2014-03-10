window['include'] = function() {

	var toLoad = arguments.length;
	var callback;
	var hasCallback = arguments[toLoad - 1] instanceof Function;
	var script;

	function onloaded() {
		toLoad --;
		if (!toLoad) {
			callback();
		}
	}

	if (hasCallback) {
		toLoad --;
		callback = arguments[arguments.length - 1];
	} else {
		callback = function() {}; // noop
	}

	for (var i = 0; i < toLoad; i ++) {

		script = document.createElement('script');
		script.src = arguments[i];
		script.onload = script.onerror = onloaded;
		(
			document.head ||
			document.getElementsByTagName('head')[0]
		).appendChild(script);

	}

};
