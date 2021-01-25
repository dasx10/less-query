let prevent = false;
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

        functions.add('includes',function(value, name) {
            let breaks = value?.ruleset?.rules?.map(e=>e.name) || 0;
            return `${+breaks.includes('@'+name.value)}`;
        });

        functions.add('get-value',function(value, index = 0) {
            if(value.name == 'calc' || typeof value.value!== `number` ) return value;
            if(!value.value.length) return value.value + (value.unit?.backupUnit || '');
            let result = 
            value.value[index.value] || 
            value.value[index.value - 1] ||
            value.value[index.value - 2] || 
            value.value[index.value - 3] || 0;
            
            return result.value+(result.unit?.backupUnit || '');
        });

        functions.add('prevent',function(value) {
            if(value.value != prevent) return prevent = value.value;
            return 'not';
        });

        functions.add('isDimension',function(value) {
            console.log()
            return value.unit.backupUnit !== undefined ? '1' : '0';
        });
    }
};