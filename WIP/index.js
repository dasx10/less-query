const fs = require('fs');
const foundSize = require('../plugin/function/Em/found');

const findIndex = (content, params) => {
	const pEm = `toEm\\(${params}\\)`;
	const regExp = new RegExp(`${pEm}`);
	const found = content.match(regExp);
	if (found) return found['index'];
	return -1;
}
const file = fs.readFileSync('./test.less', 'utf8');

const index = findIndex(file, '16px');

console.time('test');
const fontSize = foundSize(file, index);
console.timeEnd('test');
console.log(fontSize);