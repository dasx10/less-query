const fs = require('fs');
module.exports = {
    install: function(less, pluginManager, functions) {
        functions.add('fs',function(e) {
            let file = fs.readFileSync('fs.js','utf8');
            console.log(file);
            return "";
        });
    }
};