const {toP} = require('../plugin/src/function/convert');

test('return %', () => {
    expect(toP({value:192})).toBe("10%");
    expect(toP({value:1920})).toBe("100%");
    expect(toP({value:1920 * 2})).toBe("200%");
    expect(toP({value:1920 / 2})).toBe("50%");
    expect(toP({value:1920 / 4})).toBe("25%");
    expect(toP({value:1920 / 8})).toBe("12.5%");
});

test('return % set default params to equal params', () => {
    expect(toP({value:1920},{value:1920})).toBe("100%");
    expect(toP({value:1},{value:1})).toBe("100%");
    expect(toP({value:100},{value:100})).toBe("100%");
    expect(toP({value:768},{value:768})).toBe("100%");
    expect(toP({value:1024},{value:1024})).toBe("100%");
});

test('return % set < default params to equal', () => {
    expect(toP({value:192},{value:1920})).toBe("10%");
    expect(toP({value:1920 / 2},{value:1920})).toBe("50%");
    expect(toP({value:1920 / 4},{value:1920})).toBe("25%");
    expect(toP({value:1920 / 8},{value:1920})).toBe("12.5%");
});

test('return % set > default params to equal', () => {
    expect(toP({value:1920 * 2},{value:1920})).toBe("200%");
    expect(toP({value:1920 * 3},{value:1920})).toBe("300%");
    expect(toP({value:1920 * 4},{value:1920})).toBe("400%");
});

test('return % set > default params to bigger', () => {
    expect(toP({value:1920 * 4},{value:1920 * 2})).toBe("200%");
    expect(toP({value:1920 * 8},{value:1920 * 2})).toBe("400%");
});


test('return % set < default params to smaller', () => {
    expect(toP({value:32},{value:320})).toBe("10%");
    expect(toP({value:160},{value:320})).toBe("50%");
    expect(toP({value:80},{value:320})).toBe("25%");
    expect(toP({value:40},{value:320})).toBe("12.5%");
    expect(toP({value:20},{value:320})).toBe("6.25%");
});

test('return % set > default params to smaller', () => {
    expect(toP({value:640},{value:320})).toBe("200%");
    expect(toP({value:1280},{value:320})).toBe("400%");
    expect(toP({value:2560},{value:320})).toBe("800%");
});


test('return % set < default params to bigger', () => {
    expect(toP({value:192},{value:1920 * 2})).toBe("5%");
    expect(toP({value:1920},{value:1920 * 2})).toBe("50%");
    expect(toP({value:1920 / 2},{value:1920 * 2})).toBe("25%");
    expect(toP({value:1920 / 4},{value:1920 * 2})).toBe("12.5%");
    expect(toP({value:1920 / 8},{value:1920 * 2})).toBe("6.25%");
});

test('zero return', () => {
    expect(toP({value:0})).toBe("0");
    expect(toP({value:0},{value:0})).toBe("0");
    expect(toP({value:0},{value:16})).toBe("0");
    expect(toP({value:0},{value:32})).toBe("0");
    expect(toP()).toBe("0");
})