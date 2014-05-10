$i = window.include = function () {

	var a = arguments,
		n = a.length,// items to load
		c = a[n - 1],// last script or callback function
		s,// script
		i,
		r = 'readyState',
		d = document;

	if (c.call)// if last element is a function
	n--;

	function l() { //function onloaded
		if (!this[r] || /ded|te/.test(this[r])) { //if no ie or if ie readyState is equal to 'complete' or 'loaded' for ie compatibility
			n--;
			if (!n && c.call) // if all scripts are loaded and there is a callback function, call the function
			c();
		}
	}

	for (i = 0; i < n; i++) {
		s = d.createElement("script");
		s.src = a[i];
		s.onload = s.onerror = s.onreadystatechange = l; //onreadystatechange for ie compatibility
		d.getElementsByTagName('head')[0].appendChild(s);
	}

};