const getSize = require('../../function/getSize');
const getKey = require('../../function/getKey'); 
const getColor = require('../../function/getColor'); 
const data = require('../../data');
module.exports = {
    install: function(less, pluginManager, functions) {
        functions.add('border-validator',function(a) {
            let color = getColor(a);
            let size = getSize(a);
            let type = getKey(a);
            if(type != 'none'){
                if(size == 'null'){
                    size = data.border.size;
                }
                if(color == 'null'){
                    color = data.border.color;
                }
                if(type == 'null'){
                    type = data.border.type;
                }
                return `${size} ${type} ${color}`;
            }
            return 'none';
        });
    }
};