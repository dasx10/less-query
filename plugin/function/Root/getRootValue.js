const getRoot = require('./getRoot');

module.exports = (less) => {
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