const findRoot = require('./findRoot');
const testCalc = require('./testCalc');

module.exports = (less) => {
	const data = Object.entries(less.importManager.contents);
	const content = data.reduce((accumulator, item) => accumulator += item.join(''), '');
	const root = findRoot.getParams(content);
	if (/[\(]/.test(root)) {
		return testCalc(root) || '16px';
	}
	return root;
};
