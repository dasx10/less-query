const {toRem} = require('../plugin/src/function/convert');

test('return rem', () => {
    expect(toRem({value:16})).toBe("1rem");
    expect(toRem({value:16},{value:16})).toBe("1rem");
    expect(toRem({value:16},{value:1})).toBe("16rem");
    expect(toRem({value:32},{value:16})).toBe("2rem");
    expect(toRem({value:16},{value:32})).toBe("0.5rem");
});

test('zero return', () => {
    expect(toRem({value:0})).toBe("0");
    expect(toRem({value:0},{value:16})).toBe("0");
    expect(toRem({value:0},{value:32})).toBe("0");
    expect(toRem()).toBe("0");
})