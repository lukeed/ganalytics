export default function (ua, args, toWait) {
	args = {
		...args,
		tid: ua,
		cid: localStorage['ga:user'] ??= Math.random() + '.' + Math.random()
	};

	let send = (type, opts = type === 'pageview' && { dl:location.href, dt:document.title }) => {
		fetch('https://www.google-analytics.com/collect?' + new URLSearchParams({
			t: type,
			...args,
			...opts,
			z: +Date(),
			v: 1,
		}));
	};

	toWait || send('pageview');

	return { args, send };
}
