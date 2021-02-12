const {toW} = require('../plugin/src/function/convert');

test('return vw', () => {
    expect(toW({value:192})).toBe("10vw");
    expect(toW({value:1920})).toBe("100vw");
});

test('zero return', () => {
    expect(toW({value:0})).toBe("0");
    expect(toW({value:0},{value:16})).toBe("0");
    expect(toW({value:0},{value:32})).toBe("0");
    expect(toW()).toBe("0");
})