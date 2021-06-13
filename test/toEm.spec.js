const {toEm} = require('../plugin/function/convert');

test('return 1em', () => {
    expect(toEm({value:16})).toBe("1em");
    expect(toEm({value:16},{value:16})).toBe("1em");
    expect(toEm({value:1},{value:1})).toBe("1em");
    expect(toEm({value:32},{value:32})).toBe("1em");
    expect(toEm({value:100},{value:100})).toBe("1em");
})

test('return params em < default to biger', () => {
    expect(toEm({value:16},{value:32})).toBe("0.5em");
    expect(toEm({value:8},{value:32})).toBe("0.25em");
    expect(toEm({value:4},{value:32})).toBe("0.125em");
    expect(toEm({value:2},{value:32})).toBe("0.0625em");
    expect(toEm({value:1},{value:32})).toBe("0.03125em");
    expect(toEm({value:0.32},{value:32})).toBe("0.01em");
});

test('return params em < default to smaller', () => {
    expect(toEm({value:4},{value:8})).toBe("0.5em");
    expect(toEm({value:2},{value:8})).toBe("0.25em");
    expect(toEm({value:1},{value:8})).toBe("0.125em");
    expect(toEm({value:0.5},{value:8})).toBe("0.0625em");
    expect(toEm({value:0.25},{value:8})).toBe("0.03125em");
    expect(toEm({value:0.08},{value:8})).toBe("0.01em");
});

test('return params em < default to equal', () => {
    expect(toEm({value:8},{value:16})).toBe("0.5em");
    expect(toEm({value:4},{value:16})).toBe("0.25em");
    expect(toEm({value:2},{value:16})).toBe("0.125em");
    expect(toEm({value:1},{value:16})).toBe("0.0625em");
    expect(toEm({value:0.5},{value:16})).toBe("0.03125em");
    expect(toEm({value:0.16},{value:16})).toBe("0.01em");
});

test('return params em < emty', () => {
    expect(toEm({value:8})).toBe("0.5em");
    expect(toEm({value:4})).toBe("0.25em");
    expect(toEm({value:2})).toBe("0.125em");
    expect(toEm({value:1})).toBe("0.0625em");
    expect(toEm({value:0.5})).toBe("0.03125em");
    expect(toEm({value:0.16})).toBe("0.01em");
});

test('return params em > default to equal', () => {
    expect(toEm({value:32},{value:16})).toBe("2em");
    expect(toEm({value:64},{value:16})).toBe("4em");
    expect(toEm({value:128},{value:16})).toBe("8em");
});

test('return params em > default to bigger', () => {
    expect(toEm({value:64},{value:32})).toBe("2em");
    expect(toEm({value:128},{value:32})).toBe("4em");
    expect(toEm({value:256},{value:32})).toBe("8em");
});

test('return params em > default to smaller', () => {
    expect(toEm({value:16},{value:1})).toBe("16em");
    expect(toEm({value:16},{value:8})).toBe("2em");
    expect(toEm({value:32},{value:8})).toBe("4em");
    expect(toEm({value:64},{value:8})).toBe("8em");
});

test('zero return', () => {
    expect(toEm({value:0})).toBe("0");
    expect(toEm({value:0},{value:0})).toBe("0");
    expect(toEm({value:0},{value:8})).toBe("0");
    expect(toEm({value:0},{value:16})).toBe("0");
    expect(toEm({value:0},{value:32})).toBe("0");
    expect(toEm()).toBe("0");
});
