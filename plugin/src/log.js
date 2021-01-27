module.exports = {
    install: function(less, pluginManager, functions) {
        functions.add('console-log',function(...a) {
            console.log(a[0].value);
            return "";
        });
        functions.add('console-error',function(...a) {
            console.log("\x1b[31m",a[0].value,'\x1b[0m');
            return "";
        });
        functions.add('console-dir',function(...a) {
            console.log(...a);
            return "";
        });
    }
};