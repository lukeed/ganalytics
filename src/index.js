var KEY = 'ga:user';
var UID = (localStorage[KEY] = localStorage[KEY] || Math.random() + '.' + Math.random());

export default function (ua, opts, toWait) {
	opts = opts || {};
	var args = Object.assign({ tid:ua, cid:UID }, opts);

	function send(type, opts) {
		if (type === 'pageview' && !opts) {
			opts = { dl:location.href, dt:document.title };
		}
		var k, str='https://www.google-analytics.com/collect?v=1';
		var obj = Object.assign({ t:type }, args, opts, { z:Date.now() });
		for (k in obj) {
			// modified `obj-str` behavior
			if (obj[k]) str += ('&' + k + '=' + encodeURIComponent(obj[k]));
		}
		new Image().src = str; // dispatch a GET
	}

	toWait || send('pageview');

	return { args, send };
}
