$i = window.include = function () {

	var a = arguments,
		n = a.length,// items to load
		c = a[n - 1],// last script or callback function
		s,// script
		i,
		d = document;

	if (c.call)// if last element is a function
	n--;

	function l() { //function onloaded
			n--;
			if (!n && c.call) // if all scripts are loaded and there is a callback function, call the function
			c();
	}

	for (i = 0; i < n; i++) {
		s = d.createElement("script");
		s.src = a[i];
		s.onload = s.onerror = l;
		d.getElementsByTagName('head')[0].appendChild(s);
	}

};