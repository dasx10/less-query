const getCorrect = require('../plugin/src/function/getCorrect');

test('get correct change', () => {
    expect(getCorrect(2,4,2)).toBe(0);
});
