require('./_setup');
const test = require('tape');
const GA = require('../dist/ganalytics');

const KEY = 'ga:user';
const isEmpty = x => Object.keys(x).length === 0;
const isObject = x => Object.prototype.toString.call(x, '[object Object]');

function isData(t, tid, evt, obj={}) {
	let src = _SENT_.src;
	t.ok(src, '~> used an Image and set `src` attribute');
	t.true(src.startsWith('https://www.google-analytics.com/collect?v=1'), '~~> sent to Google-Analytics API');
	t.true(src.includes(`&tid=${tid}`), '~~> includes the UA idenfitifer (`tid`)');
	t.true(src.includes(`&t=${evt}`), `~~> includes the event type: "${evt}" (\`t\`)`);
	t.true(src.includes(`&cid=${localStorage[KEY]}`), '~~> includes the generated user-idenfitifer (`cid`)');
	t.true(src.includes('&z='), '~~> includes unique timestamp (`z` cache-buster)');
	for (let k in obj) {
		t.true(src.includes(`&${k}=${encodeURIComponent(obj[k])}`), `~~> includes the encoded(?) \`${k}\` value`);
	}
}

test('exports', t => {
	t.is(typeof GA, 'function', 'exports a function');

	let foo = new GA();
	t.true(isObject(foo), 'works with `new` keyword');
	t.is(foo.constructor.name, 'Object', '~> is (simple) Object');
	t.is(typeof foo.send, 'function', '~> has `send` function');
	t.true(isObject(foo.args), '~> has `args` object');

	let bar = GA();
	t.true(isObject(bar), 'works without `new` keyword');
	t.is(bar.constructor.name, 'Object', '~> is (simple) Object');
	t.is(typeof bar.send, 'function', '~> has `send` function');
	t.true(isObject(bar.args), '~> has `args` object');

	t.end();
});

test(`localStorage['${KEY}']`, t => {
	global.localStorage = {}; // reset

	let old = localStorage[KEY];
	t.is(old, undefined, '(assumption) no known user');

	let foo = GA();
	let uid = localStorage[KEY];
	t.true(!!uid, `wrote a new "${KEY}" value to localStorage`);
	t.is(foo.args.cid, uid, '~> GA instance keeps a copy as `args.cid` key');

	console.log(' '); // spacer

	let bar = new GA();
	t.is(localStorage[KEY], uid, `reuses same "${KEY}" value across instances`);
	t.is(bar.args.cid, foo.args.cid, '~> new GA instance has its own copy');

	console.log(' '); // spacer
	global.localStorage = {}; // reset

	t.is(localStorage[KEY], undefined, '(reset localStorage)');

	let baz = new GA();
	t.not(localStorage[KEY], uid, `generated unique "${KEY}" value`);
	t.is(baz.args.cid, localStorage[KEY], '~> GA instance keeps a copy as `args.cid` key');

	t.end();
});

test('ga.send :: oncreate', t => {
	global._SENT_ = {}; // reset
	global.localStorage = {}; // reset

	global.document.title = 'Hello World';
	global.location.href = 'http://example.com/hello-world';

	t.true(isEmpty(_SENT_), '(reset _SENT_)');
	t.true(isEmpty(localStorage), '(reset localStorage)');

	GA('UA-STRING');
	t.false(isEmpty(_SENT_), 'GA instance sent data immediately');

	isData(t, 'UA-STRING', 'pageview', {
		dt: document.title,
		dl: location.href
	});

	t.end();
});

test('ga.send :: toWait', t => {
	global._SENT_ = {}; // reset
	global.localStorage = {}; // reset

	t.true(isEmpty(_SENT_), '(reset _SENT_)');
	t.true(isEmpty(localStorage), '(reset localStorage)');

	let ctx = GA('UA-STRING', null, true);
	t.true(isEmpty(_SENT_), 'did NOT dispatch initial "pageview" event');
	t.false(isEmpty(localStorage), 'generates unique `cid` key in localStorage');
	t.is(ctx.args.cid, localStorage[KEY], '~> and still stores it in instance');

	t.end();
});

test('ga.send', t => {
	global._SENT_ = {}; // reset
	global.localStorage = {}; // reset

	t.true(isEmpty(_SENT_), '(reset _SENT_)');
	t.true(isEmpty(localStorage), '(reset localStorage)');

	let foo = GA('UA-STRING', null, true);

	global.document.title = 'Custom Events';
	global.location.href = 'http://example.com/custom-events';

	console.log(' '); // spacer

	let data = {
		ec: 'Video',
		el:'Home Hero',
		ea: 'Play'
	};

	foo.send('event', data);
	isData(t, 'UA-STRING', 'event', data);

	t.false(_SENT_.src.includes(`&dt=`), '~~> does NOT auto-include the `document.title` when options are passed (`dt`)');
	t.false(_SENT_.src.includes(`&dl=`), '~~> does NOT auto-include the `location.href` when options are passed (`dl`)');

	console.log(' ');	// spacer

	data = { dp: '/hello-world' };
	foo.send('pageview', data);
	isData(t, 'UA-STRING', 'pageview', data);

	t.false(_SENT_.src.includes(`&dt=`), '~~> does NOT auto-include the `document.title` when options are passed (`dt`)');
	t.false(_SENT_.src.includes(`&dl=`), '~~> does NOT auto-include the `location.href` when options are passed (`dl`)');

	t.end();
});
