const foundEnd = require('./end');
const foundStart = require('./start');

const transform = (text = '') => text
.replace('font-size', '')
.replace(':', '')
.replace(';', '')
.trim();

const foundSize = (file, start, end) => {
	if (start <= 0 || start >= file.length) return null;
	if (!end) end = start;

	const [sizeEnd, endIndex] = foundEnd(file, end);
	if (sizeEnd) {
		return transform(sizeEnd);
	}
	const [sizeStart, startIndex] = foundStart(file, start);
	if (sizeStart) {
		return transform(sizeStart);
	}

	return foundSize(file, startIndex, endIndex);
}

module.exports = foundSize;