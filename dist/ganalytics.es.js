var KEY = 'ga:user';
var DNT = navigator.doNotTrack || navigator.msDoNotTrack || window.doNotTrack;
var UID = (localStorage[KEY] = localStorage[KEY] || Math.random() + '.' + Math.random());

// modified `obj-str`
function encode(obj) {
	var k, str='https://www.google-analytics.com/collect?v=1';
	for (k in obj) {
		if (obj[k]) {
			str += ('&' + k + '=' + encodeURIComponent(obj[k]));
		}
	}
	return str;
}

function assign(tar) {
	var k, src, i=1;
	for (; i < arguments.length; i++) {
		src = arguments[i];
		for (k in src) tar[k] = src[k];
	}
	return tar;
}

function GA(ua, opts) {
	opts = opts || {};
	this.get = opts.get || window.fetch.bind();
	this.args = assign({ tid:ua, cid:UID }, opts);
	this.send('pageview');
}

GA.prototype.send = function (type, opts) {
	if (DNT) return;
	if (type === 'pageview' && !opts) {
		opts = { dl:location.href, dt:document.title };
	}
	var obj = assign({ t:type }, this.args, opts, { z:Date.now() });
	this.get(encode(obj)); // construct url; send POST
};

export default GA;
