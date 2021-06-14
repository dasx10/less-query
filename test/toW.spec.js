const {toW} = require('../plugin/function/convert');

test('return vw', () => {
    expect(toW({value:192})).toBe("10vw");
    expect(toW({value:1920})).toBe("100vw");
    expect(toW({value:1920 * 2})).toBe("200vw");
    expect(toW({value:1920 / 2})).toBe("50vw");
});

test('zero return', () => {
    expect(toW({value:0})).toBe("0");
    expect(toW({value:0},{value:0})).toBe("0");
    expect(toW({value:0},{value:16})).toBe("0");
    expect(toW({value:0},{value:32})).toBe("0");
    expect(toW()).toBe("0");
})
