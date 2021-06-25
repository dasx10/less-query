const { toEm, toRem ,toP, toW, toH, toMi, toM, toPx } = require('./function/convert');
const getRootValue = require('./function/Root/getRootValue');

module.exports = {
    install: function(less, pluginManager, functions) {
		functions.add('auto-value', (props, def) => {

			if (typeof props.value === 'string') return props.value;

			if (Array.isArray(props.value)) {
				return props.value.map((prop) => {
					if (typeof prop?.value === 'number') {
						if (!def || !def.value || typeof def.value === 'number') {
							def = getRootValue(less, prop);
							return toRem(prop, def);
						}

						if (typeof def.value === 'string') {
								return prop.value + def.value;
						}
					}

					if (typeof prop?.value === 'string') return prop.value;
					return prop
				}).join(' ');
			}

			if (!def || !def.value || typeof def.value === 'number') {
				def = getRootValue(less, props);
				return toRem(props, def);
			}

			if (typeof def.value === 'string') {
				return props.value + def.value;
			}

			return props;
		});
    }
};
