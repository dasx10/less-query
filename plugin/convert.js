module.exports = {
    install: function(less, pluginManager, functions) {
        functions.add('toEm',function(val, def) {
            if(def && def.value) return def.value / val.value + "em";
            return val.value / 16 + "em";
        });

        functions.add('toRem',function(val, def) {
            if(def && def.value) return def.value / def.value + "rem";
            return val.value / 16 + "rem";
        });

        functions.add('toP',function(val, def) {
            return (val.value / def.value) * 100 + "%";
        });

        functions.add('toW',function(val, def) {
            return (val.value / def.value) * 100 + "vw";
        });

        functions.add('toH',function(val, def) {
            return (val.value / def.value) * 100 + "vh";
        });

        functions.add('toMi',function(val, def) {
            return (val.value / def.value) * 100 + "vmin";
        });

        functions.add('toM',function(val, def) {
            return (val.value / def.value) * 100 + "vmax";
        });

        functions.add('toPx',function(val, def = {}) {
            let numerator = val.unit.numerator && val.unit.numerator[0];
            console.log(numerator === '%')
            switch(numerator){
                case '%':
                case 'vh':
                case 'vw':
                case 'vmax':
                case 'vmin':
                def.value = (def && def.value) || 1920;
                return (val.value / 100) * def.value + "px";
                case 'em':
                case 'rem':
                def.value = (def && def.value) || 16;
                return val.value * def.value + "px";
                default:
                return val;
            }
        });
    }
};