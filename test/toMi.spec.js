const {toMi} = require('../plugin/function/convert');

test('return vmin', () => {
    expect(toMi({value:192})).toBe("10vmin");
    expect(toMi({value:1920})).toBe("100vmin");
    expect(toMi({value:1920 * 2})).toBe("200vmin");
    expect(toMi({value:1920 / 2})).toBe("50vmin");
    expect(toMi({value:1920 / 4})).toBe("25vmin");
    expect(toMi({value:1920 / 8})).toBe("12.5vmin");
});

test('return vmin set default params to equal params', () => {
    expect(toMi({value:1920},{value:1920})).toBe("100vmin");
    expect(toMi({value:1},{value:1})).toBe("100vmin");
    expect(toMi({value:100},{value:100})).toBe("100vmin");
    expect(toMi({value:768},{value:768})).toBe("100vmin");
    expect(toMi({value:1024},{value:1024})).toBe("100vmin");
});

test('return vmin set < default params to equal', () => {
    expect(toMi({value:192},{value:1920})).toBe("10vmin");
    expect(toMi({value:1920 / 2},{value:1920})).toBe("50vmin");
    expect(toMi({value:1920 / 4},{value:1920})).toBe("25vmin");
    expect(toMi({value:1920 / 8},{value:1920})).toBe("12.5vmin");
});

test('return vmin set > default params to equal', () => {
    expect(toMi({value:1920 * 2},{value:1920})).toBe("200vmin");
    expect(toMi({value:1920 * 3},{value:1920})).toBe("300vmin");
    expect(toMi({value:1920 * 4},{value:1920})).toBe("400vmin");
});

test('return vmin set > default params to bigger', () => {
    expect(toMi({value:1920 * 4},{value:1920 * 2})).toBe("200vmin");
    expect(toMi({value:1920 * 8},{value:1920 * 2})).toBe("400vmin");
});


test('return vmin set < default params to smaller', () => {
    expect(toMi({value:32},{value:320})).toBe("10vmin");
    expect(toMi({value:160},{value:320})).toBe("50vmin");
    expect(toMi({value:80},{value:320})).toBe("25vmin");
    expect(toMi({value:40},{value:320})).toBe("12.5vmin");
    expect(toMi({value:20},{value:320})).toBe("6.25vmin");
});

test('return vmin set > default params to smaller', () => {
    expect(toMi({value:640},{value:320})).toBe("200vmin");
    expect(toMi({value:1280},{value:320})).toBe("400vmin");
    expect(toMi({value:2560},{value:320})).toBe("800vmin");
});


test('return vmin set < default params to bigger', () => {
    expect(toMi({value:192},{value:1920 * 2})).toBe("5vmin");
    expect(toMi({value:1920},{value:1920 * 2})).toBe("50vmin");
    expect(toMi({value:1920 / 2},{value:1920 * 2})).toBe("25vmin");
    expect(toMi({value:1920 / 4},{value:1920 * 2})).toBe("12.5vmin");
    expect(toMi({value:1920 / 8},{value:1920 * 2})).toBe("6.25vmin");
});

test('zero return', () => {
    expect(toMi({value:0})).toBe("0");
    expect(toMi({value:0},{value:0})).toBe("0");
    expect(toMi({value:0},{value:16})).toBe("0");
    expect(toMi({value:0},{value:32})).toBe("0");
    expect(toMi()).toBe("0");
})
