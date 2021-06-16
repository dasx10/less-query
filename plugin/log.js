const log = require('./function/log');
const findRoot = require('./function/findRoot');

module.exports = {
    install: function(less, pluginManager, functions) {
        functions.add('console-log',   log.log);
        functions.add('console-dir',   log.dir);
        functions.add('console-error', log.error);
    }
};
