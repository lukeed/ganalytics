const fs = require('fs');
const { rollup } = require('rollup');
const { minify } = require('uglify-js');
const pretty = require('pretty-bytes');
const sizer = require('gzip-size');
const pkg = require('./package');

const umd = pkg['umd:main'];

rollup({
	entry: 'src/index.js',
	useStrict: false
}).then(bun => {
	bun.write({
		format: 'cjs',
		dest: pkg.main,
		exports: 'default'
	});

	bun.write({
		format: 'es',
		dest: pkg.module,
		exports: 'default'
	});

	bun.write({
		dest:umd,
		format: 'umd',
		exports: 'default',
		moduleName: pkg['umd:name']
	}).then(_ => {
		const data = fs.readFileSync(umd, 'utf8');

		// produce minified output
		const { code } = minify(data, { fromString:true });
		fs.writeFileSync(umd, code);

		// output gzip size
		const int = sizer.sync(code);
		console.log(`> gzip size: ${ pretty(int) }`);
	});
});
