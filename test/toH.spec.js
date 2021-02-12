const {toH} = require('../plugin/src/function/convert');

test('return vh', () => {
    expect(toH({value:192})).toBe("10vh");
    expect(toH({value:1920})).toBe("100vh");
    expect(toH({value:1920 * 2})).toBe("200vh");
    expect(toH({value:1920 / 2})).toBe("50vh");
    expect(toH({value:1920 / 4})).toBe("25vh");
    expect(toH({value:1920 / 8})).toBe("12.5vh");
});

test('return vh set default params to equal params', () => {
    expect(toH({value:1920},{value:1920})).toBe("100vh");
    expect(toH({value:1},{value:1})).toBe("100vh");
    expect(toH({value:100},{value:100})).toBe("100vh");
    expect(toH({value:768},{value:768})).toBe("100vh");
    expect(toH({value:1024},{value:1024})).toBe("100vh");
});

test('return vh set < default params to equal', () => {
    expect(toH({value:192},{value:1920})).toBe("10vh");
    expect(toH({value:1920 / 2},{value:1920})).toBe("50vh");
    expect(toH({value:1920 / 4},{value:1920})).toBe("25vh");
    expect(toH({value:1920 / 8},{value:1920})).toBe("12.5vh");
});

test('return vh set > default params to equal', () => {
    expect(toH({value:1920 * 2},{value:1920})).toBe("200vh");
    expect(toH({value:1920 * 3},{value:1920})).toBe("300vh");
    expect(toH({value:1920 * 4},{value:1920})).toBe("400vh");
});

test('return vh set > default params to bigger', () => {
    expect(toH({value:1920 * 4},{value:1920 * 2})).toBe("200vh");
    expect(toH({value:1920 * 8},{value:1920 * 2})).toBe("400vh");
});


test('return vh set < default params to smaller', () => {
    expect(toH({value:32},{value:320})).toBe("10vh");
    expect(toH({value:160},{value:320})).toBe("50vh");
    expect(toH({value:80},{value:320})).toBe("25vh");
    expect(toH({value:40},{value:320})).toBe("12.5vh");
    expect(toH({value:20},{value:320})).toBe("6.25vh");
});

test('return vh set > default params to smaller', () => {
    expect(toH({value:640},{value:320})).toBe("200vh");
    expect(toH({value:1280},{value:320})).toBe("400vh");
    expect(toH({value:2560},{value:320})).toBe("800vh");
});


test('return vh set < default params to bigger', () => {
    expect(toH({value:192},{value:1920 * 2})).toBe("5vh");
    expect(toH({value:1920},{value:1920 * 2})).toBe("50vh");
    expect(toH({value:1920 / 2},{value:1920 * 2})).toBe("25vh");
    expect(toH({value:1920 / 4},{value:1920 * 2})).toBe("12.5vh");
    expect(toH({value:1920 / 8},{value:1920 * 2})).toBe("6.25vh");
});

test('zero return', () => {
    expect(toH({value:0})).toBe("0");
    expect(toH({value:0},{value:0})).toBe("0");
    expect(toH({value:0},{value:16})).toBe("0");
    expect(toH({value:0},{value:32})).toBe("0");
    expect(toH()).toBe("0");
})