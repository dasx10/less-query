const { toEm, toRem ,toP, toW, toH, toMi, toM, toPx } = require('./function/convert');
const getRootValue = require('./function/Root/getRootValue');

module.exports = {
    install: function(less, pluginManager, functions) {
		functions.add('auto-value', (props, def) => {
			if (!(typeof props.value === 'number' && !props.unit.numerator.length)) return props;
			if (!def || !def.value || typeof def.value === 'number') {
				def = getRootValue(less, props);
				return toRem(props, def);
			}
			if (typeof def.value === 'string') return props.value + def.value;
			return props;
		});
    }
};
