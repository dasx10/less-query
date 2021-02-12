const {toP} = require('../plugin/src/function/convert');

test('return %', () => {
    expect(toP({value:192})).toBe("10%");
    expect(toP({value:1920})).toBe("100%");
    expect(toP({value:1920 * 2})).toBe("200%");
});

test('zero return', () => {
    expect(toP({value:0})).toBe("0");
    expect(toP({value:0},{value:16})).toBe("0");
    expect(toP({value:0},{value:32})).toBe("0");
    expect(toP()).toBe("0");
})