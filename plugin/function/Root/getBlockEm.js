const getRoot = require("./getRoot");
const getRootValue = require("./getRootValue");
const testCalc = require("./testCalc");

const matchFontSize = (text = '') => text.match(/[^\/\/ font\-size]font-size+[^;]+;/gi);
const findNextBlok = (content, text) => {
	const formater = text
		.replace(/\(/g, '\\(')
		.replace(/\)/g, '\\)')
		.replace(/\[/g, '\\[')
		.replace(/\]/g, '\\]')
		.replace(/\[/g, '\\[')
		.replace(/\]/g, '\\]')
		.replace(/\./g, '\\.')

	const nextReg = new RegExp('{[^{]+' + formater + '[^{}]+}');
	const newNext = content.match(nextReg);
	if (!newNext) return null;

	const size = matchFontSize(newNext[0]);
	if (!size) {
		return findNextBlok(content, newNext[0]);
	}

	return size;
}

module.exports = (less, props) => {
	const value = props.value;
	const unit = props?.unit?.numerator || '';

	const params = value + unit;

	const data = Object.entries(less.importManager.contents);
	const content = data.reduce((accumulator, item) => accumulator += item.join(''), '');

	const regExp = new RegExp(`{[^{]+toEm\\(${params}\\)[^}]+}`, 'g');
	const found = content.match(regExp);

	if (found) {
		let size = matchFontSize(found[0]);
		if (!size) {
			size = findNextBlok(content, found[0]);
		}

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