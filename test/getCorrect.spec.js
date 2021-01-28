const getCorrect = require('../plugin/src/function/getCorrect');

test('adds 1 + 2 to equal 3', () => {
    expect(getCorrect(2,4,2)).toBe(0);  
});