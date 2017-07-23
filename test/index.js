const test = require('tape');
const fn = require('../dist/ganalytics');

test('ganalytics', t => {
	t.equal(typeof fn, 'function', 'exports a function');
	t.end();
});
