const KEY = 'ganalytics:uid';
const DNT = (navigator.doNotTrack || navigator.msDoNotTrack || window.doNotTrack);
const UID = (localStorage[KEY] = localStorage[KEY] || Math.random() + '.' + Math.random());

// modified `obj-str`
function encode(obj) {
	let k, str='https://www.google-analytics.com/collect?v=1';
	for (k in obj) {
		if (obj[k]) {
			str += `&${k}=${encodeURIComponent(obj[k])}`;
		}
	}
	return str;
}

function assign(tar) {
	let k, src, i=1, len=arguments.length;
	for (; i < len; i++) {
		src = arguments[i];
		for (k in src) tar[k] = src[k];
	}
	return tar;
}

export default class GA {
	constructor(ua, opts) {
		opts = opts || {};
		this.args = { tid:ua, cid:UID };
		if (opts.anonymize) this.args.aip=1;
		if (opts.appId) this.args.aid=opts.appId;
		if (opts.appName) this.args.an=opts.appName;
		if (opts.appVersion) this.args.av=opts.appVersion;
		if (opts.appInstaller) this.args.av=opts.appInstaller;
		this.get = opts.get || window.fetch;
		this.send('pageview');
	}

	send(type, opts) {
		if (DNT) return;
		if (type === 'pageview' && !opts) {
			opts = { dt:document.title, dl:location.href };
		}
		const obj = assign({ t:type }, this.args, opts);
		this.get(encode(obj)); // construct url; send POST
	}
}
