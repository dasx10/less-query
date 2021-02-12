const {toRem} = require('../plugin/src/function/convert');

test('return rem', () => {
    expect(toRem({value:16})).toBe("1rem");
    expect(toRem({value:16},{value:16})).toBe("1rem");
    expect(toRem({value:32},{value:16})).toBe("2rem");
    expect(toRem({value:16},{value:32})).toBe("0.5rem");
    expect(toRem({value:0})).toBe("0");
});