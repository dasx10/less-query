const {toRem} = require('../plugin/function/convert');

test('return 1rem', () => {
    expect(toRem({value:16})).toBe("1rem");
    expect(toRem({value:16},{value:16})).toBe("1rem");
    expect(toRem({value:1},{value:1})).toBe("1rem");
    expect(toRem({value:32},{value:32})).toBe("1rem");
    expect(toRem({value:100},{value:100})).toBe("1rem");
})

test('return params rem < default to biger', () => {
    expect(toRem({value:16},{value:32})).toBe("0.5rem");
    expect(toRem({value:8},{value:32})).toBe("0.25rem");
    expect(toRem({value:4},{value:32})).toBe("0.125rem");
    expect(toRem({value:2},{value:32})).toBe("0.0625rem");
    expect(toRem({value:1},{value:32})).toBe("0.03125rem");
    expect(toRem({value:0.32},{value:32})).toBe("0.01rem");
});

test('return params rem < default to smaller', () => {
    expect(toRem({value:4},{value:8})).toBe("0.5rem");
    expect(toRem({value:2},{value:8})).toBe("0.25rem");
    expect(toRem({value:1},{value:8})).toBe("0.125rem");
    expect(toRem({value:0.5},{value:8})).toBe("0.0625rem");
    expect(toRem({value:0.25},{value:8})).toBe("0.03125rem");
    expect(toRem({value:0.08},{value:8})).toBe("0.01rem");
});

test('return params rem < default to equal', () => {
    expect(toRem({value:8},{value:16})).toBe("0.5rem");
    expect(toRem({value:4},{value:16})).toBe("0.25rem");
    expect(toRem({value:2},{value:16})).toBe("0.125rem");
    expect(toRem({value:1},{value:16})).toBe("0.0625rem");
    expect(toRem({value:0.5},{value:16})).toBe("0.03125rem");
    expect(toRem({value:0.16},{value:16})).toBe("0.01rem");
});

test('return params rem < emty', () => {
    expect(toRem({value:8})).toBe("0.5rem");
    expect(toRem({value:4})).toBe("0.25rem");
    expect(toRem({value:2})).toBe("0.125rem");
    expect(toRem({value:1})).toBe("0.0625rem");
    expect(toRem({value:0.5})).toBe("0.03125rem");
    expect(toRem({value:0.16})).toBe("0.01rem");
});

test('return params rem > default to equal', () => {
    expect(toRem({value:32},{value:16})).toBe("2rem");
    expect(toRem({value:64},{value:16})).toBe("4rem");
    expect(toRem({value:128},{value:16})).toBe("8rem");
});

test('return params rem > default to bigger', () => {
    expect(toRem({value:64},{value:32})).toBe("2rem");
    expect(toRem({value:128},{value:32})).toBe("4rem");
    expect(toRem({value:256},{value:32})).toBe("8rem");
});

test('return params rem > default to smaller', () => {
    expect(toRem({value:16},{value:1})).toBe("16rem");
    expect(toRem({value:16},{value:8})).toBe("2rem");
    expect(toRem({value:32},{value:8})).toBe("4rem");
    expect(toRem({value:64},{value:8})).toBe("8rem");
});

test('zero return', () => {
    expect(toRem({value:0})).toBe("0");
    expect(toRem({value:0},{value:0})).toBe("0");
    expect(toRem({value:0},{value:8})).toBe("0");
    expect(toRem({value:0},{value:16})).toBe("0");
    expect(toRem({value:0},{value:32})).toBe("0");
    expect(toRem()).toBe("0");
});
