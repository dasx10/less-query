module.exports = (text = '') => {
	let match = text.match(/(\/\/|)([ ]+|)font\-size([^:]+:|:)[^;@{},]+;|(\/\/|)([ ]+|).fz\([0-9\-\.]{1,10000}[^,);]+\);|(\/\/|)([ ]+|).font-size\([0-9\-\.]{1,10000}[^,);]+\);/g);

	if (match) {
		match = match.reduce((acc, el) => {
			if (/\/\//.test(el)) return acc;

			const test = /\.fz\(/.test(el);
			if (test) {
				const param = el.replace('.fz(','').replace(');', '');
				el = 'font-size: ' + param + ';';
			} else {
				const test2 = /\.font-size\(/.test(el);
				if (test2) {
					const param = el.replace('.font-size(','').replace(');', '');
					el = 'font-size: ' + param + ';';
				}
			}

			return [...acc, el];
		}, []);
	}

	return match;
}
