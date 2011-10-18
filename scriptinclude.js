/*	ScriptInclude v1.0
	by Evan Hahn

	ScriptInclude allows you to asynchronously load <script> tags into
	the browser. */

// Namespace
var ScriptInclude = ScriptInclude || Object.create(null);

// Define includes
ScriptInclude.includes = Object.create(null);
ScriptInclude.defineIncludes = function(object) {
	for (key in object) {
		ScriptInclude.includes[key] = object[key];
	}
};

// Do the includes
ScriptInclude.include = function() {

	var size = arguments.length;
	
	// If the last one is a function, we'll execute it
	var hasCallback = arguments[size - 1] instanceof Function;
	if (hasCallback) {
		size -= 1;
		ScriptInclude.queued = ScriptInclude.queued || [];
		ScriptInclude.callback = ScriptInclude.callback || [];
		var queueNumber = ScriptInclude.queued.length;
		ScriptInclude.queued[queueNumber] = size;
		ScriptInclude.callback[queueNumber] = arguments[size];
	}

	// Load them all
	for (var i = 0; i < size; i ++) {
		
		var script = document.createElement('script');
		
		// If the script is defined with an alias, load the predefined script
		if (ScriptInclude.includes && ScriptInclude.includes[arguments[i]]) {
			script.src = ScriptInclude.includes[arguments[i]];
		} else {
			script.src = arguments[i];
		}

		// Execute callback if I should
		if (hasCallback) {
			script.onload = function() {
				ScriptInclude.queued[queueNumber] -= 1;
				if (ScriptInclude.queued[queueNumber] === 0) {
					ScriptInclude.callback[queueNumber].call();
				}
			};
			script.onerror = script.onload;
		}
	
		document.head.appendChild(script);
	}

	// Return the queue number
	return queueNumber;

};

// Do I have to keep waiting?
ScriptInclude.isQueueLoaded = function(queueNumber) {
	if (ScriptInclude.queued) {
		return (ScriptInclude.queued[queueNumber] === 0);
	} else {
		return true;
	}
};

// Some default includes
ScriptInclude.defineIncludes({
	'jquery': 'jquery.js'
});
