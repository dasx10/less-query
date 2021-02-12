const {toMi} = require('../plugin/src/function/convert');

test('return vmin', () => {
    expect(toMi({value:192})).toBe("10vmin");
    expect(toMi({value:1920})).toBe("100vmin");
    expect(toMi({value:1920 * 2})).toBe("200vmin");
});

test('zero return', () => {
    expect(toMi({value:0})).toBe("0");
    expect(toMi({value:0},{value:16})).toBe("0");
    expect(toMi({value:0},{value:32})).toBe("0");
    expect(toMi()).toBe("0");
})