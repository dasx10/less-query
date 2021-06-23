const foundEnd = require('./end');
const foundStart = require('./start');
const findRoot = require('../Root/findRoot');

const transform = (text = '') => text
.replace('font-size', '')
.replace(':', '')
.replace(';', '')
.trim();

const getUnit = (size) => {
	return size
		.replace(/[0-9.\-]/g, '')
}

const getParam = (size) => {
	return size
		.replace(/[^0-9.\-]/g, '')
}

const isEm = (size) => {
	return getUnit(size) === 'em';
}

const isP = (size) => {
	return getUnit(size) === '%';
}

const isRem = (size) => {
	return getUnit(size) === 'rem';
}

const foundSize = (file, start, end, cof = 1) => {
	if (start <= 0 || end >= file.length) {
		const root = findRoot.getParams(file);

		return (parseFloat(root) * cof) + root.replace(/[0-9. -]/g, '');
	}

	if (!end) end = start;

	const [sizeEnd, endIndex] = foundEnd(file, end);
	const [sizeStart, startIndex] = foundStart(file, start);

	if (sizeEnd) {
		let size = transform(sizeEnd);

		if (isP(size)) {
			size = (parseFloat(size) / 100) + 'em';
		}

		if (isEm(size)) {
			cof = cof * parseFloat(size);
			return foundSize(file, startIndex, endIndex, cof);
		}

		if (isRem(size)) {
			const root = findRoot.getParams(file);

			cof = cof * parseFloat(size);
			return (parseFloat(root) * cof) + root.replace(/[0-9.\-]/g, '');
		}

		const unit = getUnit(size);
		const param = getParam(size);

		return (param * cof) + unit;
	}

	if (sizeStart) {
		let size = transform(sizeStart);
		console.log('size', size);

		if (isP(size)) {
			size = (parseFloat(size) / 100) + 'em';
		}

		if (isEm(size)) {
			cof = cof * parseFloat(size);
			return foundSize(file, startIndex, endIndex, cof);
		}

		if (isRem(size)) {
			const root = findRoot.getParams(file);
			cof = cof * parseFloat(size);
			return (parseFloat(root) * cof) + root.replace(/[0-9.\-]/g, '');
		}

		const unit = getUnit(size);
		const param = getParam(size);

		return (param * cof) + unit;
	}

	return foundSize(file, startIndex, endIndex, cof);
}

module.exports = foundSize;