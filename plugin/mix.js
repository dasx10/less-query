"use strict";

module.exports = {
  install: function (less, pluginManager, functions) {
    functions.add('x', function (count, value) {
      let result = '';

      for (let i = 0; i < +count.value; i++) {
        result += value.value;
        if (i === +count.value - 1) continue;
        result += ',';
      }

      return result;
    });
    functions.add('includes', function (value, name) {
      var _value$ruleset, _value$ruleset$rules;

      let breaks = (value === null || value === void 0 ? void 0 : (_value$ruleset = value.ruleset) === null || _value$ruleset === void 0 ? void 0 : (_value$ruleset$rules = _value$ruleset.rules) === null || _value$ruleset$rules === void 0 ? void 0 : _value$ruleset$rules.map(e => e.name)) || 0;
      return `${+breaks.includes('@' + name.value)}`;
    });
    functions.add('get-value', function (value, index = 0) {
      var _value$unit, _result$unit;

      if (value.name == 'calc' || typeof value.value !== `number`) return value;
      if (!value.value.length) return value.value + (((_value$unit = value.unit) === null || _value$unit === void 0 ? void 0 : _value$unit.backupUnit) || '');
      let result = value.value[index.value] || value.value[index.value - 1] || value.value[index.value - 2] || value.value[index.value - 3] || 0;
      return result.value + (((_result$unit = result.unit) === null || _result$unit === void 0 ? void 0 : _result$unit.backupUnit) || '');
    });
    functions.add('isDimension', function (value) {
      console.log();
      return value.unit.backupUnit !== undefined ? '1' : '0';
    });
  }
};