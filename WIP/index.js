const fs = require('fs');

const file = fs.readFileSync('./test.less', 'utf8');

console.log(file);