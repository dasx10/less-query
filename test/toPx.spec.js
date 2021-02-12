const {toP} = require('../plugin/src/function/convert');

test('zero return', () => {
    expect(toP({value:0})).toBe("0");
    expect(toP({value:0},{value:0})).toBe("0");
    expect(toP({value:0},{value:16})).toBe("0");
    expect(toP({value:0},{value:32})).toBe("0");
    expect(toP()).toBe("0");
})