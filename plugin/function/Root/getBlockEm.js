const getRoot = require("./getRoot");
const getRootValue = require("./getRootValue");
const testCalc = require("./testCalc");
const foundSize = require('../Em/found');
const matchFontSize = (text = '') => text.match(/[^\/\/ font\-size]font-size+[^;]+;/gi);
const cacheCount = {};

const findIndex = (content, params) => {
	const pEm = `toEm\\(${params}\\)`;
	const regExp = new RegExp(`${pEm}`);
	const found = content.match(regExp);
	if (found) return found['index'];
	return -1;
}


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

	const found = content.match(new RegExp('{[^{]+' +pEm+ '[^}]+}'));

	const index = findIndex(found[0], params);
	// let root = foundSize(content, index);
	console.log(index);

	// if (found) {
	// 	let root = foundSize(found);
	// 	root = testCalc(root) || getRoot(less);
	// 	const value = root.replace(/[^0-9.]/g, '').trim();
	// 	const unit = root.replace(/[0-9.]/g, '').trim();
	// 	return {
	// 		value: +value,
	// 		unit: {
	// 			numerator: [unit]
	// 		},
	// 	};
	// }

	return getRootValue(less);
}