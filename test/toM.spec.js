const {toM} = require('../plugin/src/function/convert');

test('return vmax', () => {
    expect(toM({value:192})).toBe("10vmax");
    expect(toM({value:1920})).toBe("100vmax");
    expect(toM({value:1920 * 2})).toBe("200vmax");
    expect(toM({value:1920 / 2})).toBe("50vmax");
    expect(toM({value:1920 / 4})).toBe("25vmax");
    expect(toM({value:1920 / 8})).toBe("12.5vmax");
});

test('return vmax set default params to equal params', () => {
    expect(toM({value:1920},{value:1920})).toBe("100vmax");
    expect(toM({value:1},{value:1})).toBe("100vmax");
    expect(toM({value:100},{value:100})).toBe("100vmax");
    expect(toM({value:768},{value:768})).toBe("100vmax");
    expect(toM({value:1024},{value:1024})).toBe("100vmax");
});

test('return vmax set < default params to equal', () => {
    expect(toM({value:192},{value:1920})).toBe("10vmax");
    expect(toM({value:1920 / 2},{value:1920})).toBe("50vmax");
    expect(toM({value:1920 / 4},{value:1920})).toBe("25vmax");
    expect(toM({value:1920 / 8},{value:1920})).toBe("12.5vmax");
});

test('return vmax set > default params to equal', () => {
    expect(toM({value:1920 * 2},{value:1920})).toBe("200vmax");
    expect(toM({value:1920 * 3},{value:1920})).toBe("300vmax");
    expect(toM({value:1920 * 4},{value:1920})).toBe("400vmax");
});

test('return vmax set > default params to bigger', () => {
    expect(toM({value:1920 * 4},{value:1920 * 2})).toBe("200vmax");
    expect(toM({value:1920 * 8},{value:1920 * 2})).toBe("400vmax");
});


test('return vmax set < default params to smaller', () => {
    expect(toM({value:32},{value:320})).toBe("10vmax");
    expect(toM({value:160},{value:320})).toBe("50vmax");
    expect(toM({value:80},{value:320})).toBe("25vmax");
    expect(toM({value:40},{value:320})).toBe("12.5vmax");
    expect(toM({value:20},{value:320})).toBe("6.25vmax");
});

test('return vmax set > default params to smaller', () => {
    expect(toM({value:640},{value:320})).toBe("200vmax");
    expect(toM({value:1280},{value:320})).toBe("400vmax");
    expect(toM({value:2560},{value:320})).toBe("800vmax");
});


test('return vmax set < default params to bigger', () => {
    expect(toM({value:192},{value:1920 * 2})).toBe("5vmax");
    expect(toM({value:1920},{value:1920 * 2})).toBe("50vmax");
    expect(toM({value:1920 / 2},{value:1920 * 2})).toBe("25vmax");
    expect(toM({value:1920 / 4},{value:1920 * 2})).toBe("12.5vmax");
    expect(toM({value:1920 / 8},{value:1920 * 2})).toBe("6.25vmax");
});

test('zero return', () => {
    expect(toM({value:0})).toBe("0");
    expect(toM({value:0},{value:0})).toBe("0");
    expect(toM({value:0},{value:16})).toBe("0");
    expect(toM({value:0},{value:32})).toBe("0");
    expect(toM()).toBe("0");
})