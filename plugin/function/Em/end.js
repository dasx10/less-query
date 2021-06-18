const matchFontSize = require('./fz');

module.exports = (file, index) => {
	let end = '';
	let i = index;
	let skip = 0;
	while (i < file.length) {
		const char = file[++i];
		if (skip === 0) {
			end += char;
		}
		if (char === '{') {
			skip++;
		}

		if (char === '}') {
			if (skip === 0) {
				break;
			}
			skip--;
		}
	}
	const fontSize = matchFontSize(end);
	if (fontSize) return [fontSize[fontSize.length -1], i]
	return [null, i];
}