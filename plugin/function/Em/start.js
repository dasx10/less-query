const matchFontSize = require('./fz');

module.exports = (file, index) => {
	let start = '';
	let i = index;
	let skip = 0;
	while (i >= 0) {
		const char = file[--i];
		if (skip === 0) {
			start = char + start;
		}
		if (char === '}') {
			skip++;
		}

		if (char === '{') {
			if (skip === 0) {
				break;
			}
			skip--;
		}
	}
	const fontSize = matchFontSize(start);
	if (fontSize) return [fontSize[fontSize.length -1], i]
	return [null, i];
}