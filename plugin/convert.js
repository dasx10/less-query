const {toEm, toRem ,toP, toW, toH, toMi, toM, toPx} = require('./src/function/convert');

module.exports = {
    install: function(less, pluginManager, functions) {
        functions.add('toEm',toEm);

        functions.add('toRem',toRem);

        functions.add('toP',toP);

        functions.add('toW',toW);

        functions.add('toH',toH);

        functions.add('toMi',toMi);

        functions.add('toM',toM);

        functions.add('toPx',toPx);
    }
};