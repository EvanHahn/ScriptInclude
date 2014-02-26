/*jslint browser: true*/

/* ScriptInclude
 * https://github.com/EvanHahn/ScriptInclude
 * by Evan Hahn
 * License: Unlicense
 */

(function (doc) {
    "use strict";

    var head = doc.head || (doc.getElementsByTagName("head")[0]),

        noop = function () {
            return;
        },

        include = function () {

            var toLoad = arguments.length,
                callback,
                hasCallback = arguments[toLoad - 1] instanceof Function,
                script,
                i,
                onloaded = function () {
                    toLoad -= 1;
                    if (toLoad === 0) {
                        callback.call();
                    }
                };

            if (hasCallback) {
                toLoad -= 1;
                callback = arguments[arguments.length - 1];
            } else {
                callback = noop;
            }

            for (i = 0; i < toLoad; i += 1) {
                script = doc.createElement("script");
                script.src = arguments[i];

                script.onload = script.onerror = onloaded;
                head.appendChild(script);
            }
        };

    if (typeof module !== "undefined") {
        module.exports = include;
    } else {
        this.include = include;
    }

}(document));
