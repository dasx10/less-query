const getRoot = require("./getRoot");
const testCalc = require("./testCalc");
const foundSize = require('../Em/found');
const cacheCount = {};


module.exports = (less, props) => {
	const value = props.value;
	const unit = props?.unit?.numerator || '';

	const params = value + unit;

	const data = Object.entries(less.importManager.contents);
	const content = data.reduce((accumulator, item) => accumulator += item.join(''), '');

	const pEm = `toEm\\(${params}\\)`;
	const count = content.match(new RegExp(pEm, 'g'));
	const length = count?.length || 1;
	if (length > 1) {
		if (cacheCount[params] === undefined){
			cacheCount[params] = 0;
		} else {
			cacheCount[params] += 1;
		}
		if (cacheCount[params] % length === 0) cacheCount[params] = 0;
	} else {
		cacheCount[params] = 0;
	}

	const found = content.match(new RegExp('{[^{]+' +pEm+ '[^}]+}', 'g'));
	const index = content.indexOf(found[cacheCount[params]]) + 1;
	let root = foundSize(content, index);
		root = testCalc(root) || getRoot(less);


	const rootValue = root.replace(/[^0-9.\-]/g, '').trim();
	const rootUnit = root.replace(/[0-9.\-]/g, '').trim();
	return {
		value: +rootValue,
		unit: {
			numerator: [rootUnit]
		},
	};
}