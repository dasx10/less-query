const intOrZero = require('../plugin/function/intOrZero');

test('return num or 0', () => {
    expect(intOrZero(1)).toBe(1);
    expect(intOrZero('auto')).toBe(0);
    expect(intOrZero('')).toBe(0);
    expect(intOrZero(undefined)).toBe(0);
    expect(intOrZero(NaN)).toBe(0);
});
