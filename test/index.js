require('./_setup');
const test = require('tape');
const GA = require('../dist/ganalytics');

const KEY = 'ga:user';
const isEmpty = x => Object.keys(x).length === 0;
const isObject = x => Object.prototype.toString.call(x, '[object Object]');

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
	});
	// todo: ....
});
