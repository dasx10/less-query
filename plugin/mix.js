module.exports = {
    install: function(less, pluginManager, functions) {
        functions.add('x',function(count, value) {
            let result = '';
            for(let i = 0; i < +count.value; i++){
                result += value.value;
                if(i === +count.value -1) continue;
                result += ',';
            }
            return result;
        });

        functions.add('includes',function(props, name) {
            let breaks = props?.ruleset?.rules?.map(e=>e.name) || 0;
            return `${+breaks.includes('@'+name.value)}`;
        });

        functions.add('get-value',function(props, step = { value: 0 }, next) {
			const index = step.value;
			const nextIndex = next?.value;
			const getByIndex = (value, index) => {
				if (index < 0) return '';
				else {
					const el = value[index];
					if (el === undefined) {
						return getByIndex(value, nextIndex ?? index - 1);
					}

					return el;
				}
			}
            const isMany = Array.isArray(props.value);
			if (!isMany) return props;
			return getByIndex(props.value, index);
			return '';
        });
    }
};
