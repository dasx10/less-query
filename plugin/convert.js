const { toEm, toRem ,toP, toW, toH, toMi, toM, toPx } = require('./function/convert');
const findRoot = require('./function/findRoot');

const testCalc = (root) => {
	if(/calc\([^)]+\)/.test(root)) {
		const calc = root
			.replace('calc(','')
			.replace(/[\)]$|\);/, '')
			.trim();

		const calcParam = calc.match(/[0-9.]+[a-z%]+/g);
		if (calcParam.length === 1) {
			const calcMatch = calc.replace(/[a-z%]/gi, '');
			return eval(calcMatch) + calcParam[0].replace(/[0-9.]/g, '');
		}

		const units = calcParam.map((param) => param.replace(/[0-9.]/g, ''));

		let flag = true;
		units.reduce((prevent, next) => {
			flag = prevent === next;
			return prevent = next;
		}, units[0]);

		if (flag) {
			const calcMatch = calc.replace(/[a-z%]/gi, '');
			return eval(calcMatch) + calcParam[0].replace(/[0-9.]/g, '');
		}
	}
}

getRoot = (less) => {
	const data = Object.entries(less.importManager.contents);
	const content = data.reduce((accumulator, item) => accumulator += item.join(''), '');
	const root = findRoot.getParams(content);
	if (/[\(]/.test(root)) {
		return testCalc(root) || '16px';
	}
	return root;
}

const getValue = (less) => {
	const root = getRoot(less);
	const value = root.replace(/[^0-9.]/g, '').trim();
	const unit = root.replace(/[0-9.]/g, '').trim();
	return {
		value: +value,
		unit: {
			numerator: [unit]
		},
	};
}

getBlockEm = (less, props) => {
	const value = props.value;
	const unit = props?.unit?.numerator || '';

	const params = value + unit;

	const data = Object.entries(less.importManager.contents);
	const content = data.reduce((accumulator, item) => accumulator += item.join(''), '');

	const regExp = new RegExp(`{[^{]+toEm\\(${params}\\)[^}]+}`, 'g');
	const found = content.match(regExp);

	if (found) {
		const size = found[0].match(/font-size+[^;]+;/gi);
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

	return getValue(less);
}


module.exports = {
    install: function(less, pluginManager, functions) {
		functions.add('getRoot', () => getRoot(less));

		functions.add('toP', toP);
        functions.add('toW', toW);
        functions.add('toH', toH);
        functions.add('toM', toM);
        functions.add('toMi', toMi);
        functions.add('toPx', toPx);
        functions.add('toEm', (props, def) => {

			if (!def) {
				def = getBlockEm(less, props);
			}

			return toEm(props, def);
		});
		functions.add('toRem', (props, def) => {
			if (!def) {
				def = getValue(less, props);
			}
			return toRem(props, def);
		});
    }
};
