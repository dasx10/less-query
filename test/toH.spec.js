const {toH} = require('../plugin/src/function/convert');

test('return vh', () => {
    expect(toH({value:192})).toBe("10vh");
    expect(toH({value:1920})).toBe("100vh");
    expect(toH({value:1920 * 2})).toBe("200vh");
});

test('zero return', () => {
    expect(toH({value:0})).toBe("0");
    expect(toH({value:0},{value:16})).toBe("0");
    expect(toH({value:0},{value:32})).toBe("0");
    expect(toH()).toBe("0");
})