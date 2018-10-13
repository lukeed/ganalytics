var KEY = 'ga:user';
var UID = (localStorage[KEY] = localStorage[KEY] || Math.random() + '.' + Math.random());

function GA(ua, opts, toWait) {
	opts = opts || {};
	this.args = Object.assign({ tid:ua, cid:UID }, opts);
	toWait || this.send('pageview');
}

GA.prototype.send = function (type, opts) {
	if (type === 'pageview' && !opts) {
		opts = { dl:location.href, dt:document.title };
	}
	var obj = Object.assign({ t:type }, this.args, opts, { z:Date.now() });
	var k, str='https://www.google-analytics.com/collect?v=1';
	for (k in obj) {
		// modified `obj-str` behavior
		if (obj[k]) str += ('&' + k + '=' + encodeURIComponent(obj[k]));
	}
	new Image().src = str; // dispatch a GET
};

export default GA;
