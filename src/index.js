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

function GA(ua, opts) {
	opts = opts || {};
	this.args = assign({ tid:ua, cid:UID }, opts);
	this.send('pageview');
}

GA.prototype.send = function (type, opts) {
	if (DNT) return;
	if (type === 'pageview' && !opts) {
		opts = { dl:location.href, dt:document.title };
	}
	var obj = Object.assign({ t:type }, this.args, opts, { z:Date.now() });
	new Image().src = encode(obj); // dispatch a GET
}

export default GA;
