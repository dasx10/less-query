const getConf = require('../plugin/function/getCof');

test('get coefficient change', () => {
    expect(getConf(2, 1, 2, 1)).toBe(1);
});
