const getConf = require('../plugin/src/function/getCof');

test('get coficient cgange', () => {
    expect(getConf(2, 1, 2, 1)).toBe(1);  
});