const getForm = require('../plugin/src/function/getForm');

test('get coefficient cgange', () => {
    expect(getForm('vw', {value:12}, {value:20}, {value:320}, {value:1920})).toBe("10.4 + (100vw * 0.005)");
    expect(getForm('vh', {value:12}, {value:20}, {value:320}, {value:1920})).toBe("10.4 + (100vh * 0.005)");
    expect(getForm('vmin', {value:12}, {value:20}, {value:320}, {value:1920})).toBe("10.4 + (100vmin * 0.005)");
    expect(getForm('vmax', {value:12}, {value:20}, {value:320}, {value:1920})).toBe("10.4 + (100vmax * 0.005)");
});
