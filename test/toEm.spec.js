const {toEm} = require('../plugin/src/function/convert');

test('return em', () => {
    expect(toEm({value:16})).toBe("1em");
    expect(toEm({value:16},{value:16})).toBe("1em");
    expect(toEm({value:32},{value:16})).toBe("2em");
    expect(toEm({value:16},{value:32})).toBe("0.5em");
    expect(toEm({value:0})).toBe("0");
});