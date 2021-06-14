const log = require('../plugin/function/log');

test('log return ""', () => {
    expect(log.log(1)).toBe("");
    expect(log.dir(1)).toBe("");
    expect(log.error(1)).toBe("");
});
