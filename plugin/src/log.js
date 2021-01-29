const log = require('./function/log');
module.exports = {
    install: function(less, pluginManager, functions) {
        functions.add('console-log',log.log);
        functions.add('console-error',log.error);
        functions.add('console-dir',log.dir);
    }
};