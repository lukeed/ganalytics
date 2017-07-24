['navigator', 'document', 'window', 'location', 'localStorage'].forEach(x => global[x] = {});

const assert = require('assert');
const fn = require('../dist/ganalytics');

describe('ganalytics', () => {
	it('should export a function', () => {
		assert.equal(typeof fn, 'function');
	});
	// todo: ....
});
