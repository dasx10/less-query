const getRoot = require("./getRoot");
const getRootValue = require("./getRootValue");
const testCalc = require("./testCalc");

const matchFontSize = (text = '') => text.match(/[^\/\/ font\-size]font-size+[^;]+;/gi);

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

	const regExp = new RegExp(`{[^{]+${pEm}[^}]+}`, 'g');
	const found = content.match(regExp);

	if (found) {
		const elem = found[cacheCount[params]];

		let size = matchFontSize(elem);

		if (size && !/toEm/.test(size)) {
			let root = size[size.length - 1]
				.replace('font-size', '')
				.replace(':', '')
				.replace(';', '')
				.trim();

			if (/[\(]/.test(root)) {
				root = testCalc(root) || getRoot(less);
			}

			const value = root.replace(/[^0-9.]/g, '').trim();
			const unit = root.replace(/[0-9.]/g, '').trim();
			return {
				value: +value,
				unit: {
					numerator: [unit]
				},
			};
		}
	}

	return getRootValue(less);
}