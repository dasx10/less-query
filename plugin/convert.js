const {toEm, toRem ,toP, toW, toH, toMi, toM, toPx} = require('./function/convert');
module.exports = {
    install: function(less, pluginManager, functions) {
		functions.add('toP', toP);
        functions.add('toW', toW);
        functions.add('toH', toH);
        functions.add('toM', toM);
        functions.add('toMi', toMi);
        functions.add('toPx', toPx);
        functions.add('toEm', toEm);
		functions.add('toRem', toRem);
    }
};
