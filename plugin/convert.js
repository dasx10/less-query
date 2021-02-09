module.exports = {
    install: function(less, pluginManager, functions) {
        functions.add('toEm',function(val, def) {
            if(def && def.value) return def.value / val.value + "em";
            return 16 / val.value + "em";
        });

        functions.add('toRem',function(val, def) {
            if(def && def.value) return def.value / def.value + "rem";
            return 16 / val.value + "rem";
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

        functions.add('emToPx',function(val, def) {
            return val.value * def.value + "px";
        });

        functions.add('pToPx',function(val, def) {
            return (val.value / 100) * def.value + "px";
        });
    }
};