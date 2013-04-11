/* ScriptInclude
 * https://github.com/EvanHahn/ScriptInclude
 * by Evan Hahn
 * License: Unlicense
 */

;(function() {

	document.head || (document.head = document.getElementsByTagName("head")[0]);

	var include = function() {

		var toLoad = arguments.length;

		var callback;
		var hasCallback = arguments[toLoad - 1] instanceof Function;
		if (hasCallback) {
			toLoad --;
			callback = arguments[arguments.length - 1];
		} else {
			callback = function() {};
		}

		var script;
		for (var i = 0; i < toLoad; i ++) {

			script = document.createElement("script");
			script.src = arguments[i];

			script.onload = script.onerror = function() {
				toLoad --;
				if (toLoad === 0)
					callback.call();
			};

			document.head.appendChild(script);

		}

	};

	if (typeof exports !== "undefined")
		exports = include;
	else
		this.include = include;

})();
