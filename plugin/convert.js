const { toEm, toRem ,toP, toW, toH, toMi, toM, toPx } = require('./function/convert');
const getRoot = require('./function/Root/getRoot');
const getRootValue = require('./function/Root/getRootValue');
const getBlockEm = require('./function/Root/getBlockEm');

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
				def = getRootValue(less, props);
			}
			return toRem(props, def);
		});
    }
};
