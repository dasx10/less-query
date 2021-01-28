const getConf = require('../plugin/src/function/getCof');

test('adds 1 + 2 to equal 3', () => {
    expect(getConf(2, 1, 2, 1)).toBe(1);  
});