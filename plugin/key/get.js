const getKey = require('../function/getKey');
module.exports = {
    install: function(less, pluginManager, functions) {
        functions.add('get-key',getKey);
    }
};