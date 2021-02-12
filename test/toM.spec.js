const {toM} = require('../plugin/src/function/convert');

test('return vmax', () => {
    expect(toM({value:192})).toBe("10vmax");
    expect(toM({value:1920})).toBe("100vmax");
    expect(toM({value:1920 * 2})).toBe("200vmax");
});

test('zero return', () => {
    expect(toM({value:0})).toBe("0");
    expect(toM({value:0},{value:16})).toBe("0");
    expect(toM({value:0},{value:32})).toBe("0");
    expect(toM()).toBe("0");
})