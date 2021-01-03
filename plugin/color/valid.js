const getColor = require('../../function/getColor'); 
const data = require('../../data');
module.exports = {
    install: function(less, pluginManager, functions) {
        functions.add('color-validator',function(a) {
            let color = getColor(a);
            if(color == 'null'){
                color = data.border.color;
            }
            return color;
        });
    }
};