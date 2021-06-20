module.exports = (root) => {
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

	return root;
};
