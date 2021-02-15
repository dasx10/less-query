"use strict";

var getCof = require('./src/function/getCof');

var getCorrect = require('./src/function/getCorrect');
var intOrZero = require('./src/function/intOrZero');

function getForm(met, m, d, sm, sd) {
  var _m$unit, _d$unit, _d$unit2, _d$unit3;

  var name = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'fd';
  var cof = 0;
  var correct = 0;
  var type = (m === null || m === void 0 ? void 0 : (_m$unit = m.unit) === null || _m$unit === void 0 ? void 0 : _m$unit.backupUnit) || (d === null || d === void 0 ? void 0 : (_d$unit = d.unit) === null || _d$unit === void 0 ? void 0 : _d$unit.backupUnit) || '';

  if (type !== (d === null || d === void 0 ? void 0 : (_d$unit2 = d.unit) === null || _d$unit2 === void 0 ? void 0 : _d$unit2.backupUnit) && (d === null || d === void 0 ? void 0 : (_d$unit3 = d.unit) === null || _d$unit3 === void 0 ? void 0 : _d$unit3.backupUnit) !== undefined) {
    var _d$unit4, _m$unit2, _d$unit5;

    console.log("\x1b[31m", "invalid unit ".concat(d === null || d === void 0 ? void 0 : (_d$unit4 = d.unit) === null || _d$unit4 === void 0 ? void 0 : _d$unit4.backupUnit, ", in ").concat(name, "(").concat(m.value).concat((m === null || m === void 0 ? void 0 : (_m$unit2 = m.unit) === null || _m$unit2 === void 0 ? void 0 : _m$unit2.backupUnit) || '', ",").concat(d.value).concat((d === null || d === void 0 ? void 0 : (_d$unit5 = d.unit) === null || _d$unit5 === void 0 ? void 0 : _d$unit5.backupUnit) || '', ")"), '\x1b[0m');
  }

  m.value = intOrZero(m.value);
  d.value = intOrZero(d.value);
  sm.value = intOrZero(sm.value);
  sd.value = intOrZero(sd.value);
  cof = getCof(m.value, d.value, sm.value, sd.value);
  correct = getCorrect(cof, m.value, sm.value);
  var vw = 100 * cof;
  return "".concat(correct).concat(type, " + ").concat(vw).concat(met);
}

function getCalc(met, m, d, sm, sd) {
  var _m$unit3, _d$unit6;

  if (m.value === d.value && (m === null || m === void 0 ? void 0 : (_m$unit3 = m.unit) === null || _m$unit3 === void 0 ? void 0 : _m$unit3.backupUnit) !== (d === null || d === void 0 ? void 0 : (_d$unit6 = d.unit) === null || _d$unit6 === void 0 ? void 0 : _d$unit6.backupUnit)) {
    var _m$unit4;

    return "".concat(m.value).concat((m === null || m === void 0 ? void 0 : (_m$unit4 = m.unit) === null || _m$unit4 === void 0 ? void 0 : _m$unit4.backupUnit) || '');
  }

  return "calc(".concat(getForm(met, m, d, sm, sd), ")");
}

module.exports = {
  install: function install(less, pluginManager, functions) {
    functions.add('fw', function () {
      var _d, _m$unit5, _d2, _d2$unit;

      var m = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var d = arguments.length > 1 ? arguments[1] : undefined;
      var sm = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        value: 320
      };
      var sd = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
        value: 1920
      };
      ((_d = d) === null || _d === void 0 ? void 0 : _d.value) === undefined ? d = m : d;

      if (m.value === d.value && (m === null || m === void 0 ? void 0 : (_m$unit5 = m.unit) === null || _m$unit5 === void 0 ? void 0 : _m$unit5.backupUnit) === ((_d2 = d) === null || _d2 === void 0 ? void 0 : (_d2$unit = _d2.unit) === null || _d2$unit === void 0 ? void 0 : _d2$unit.backupUnit)) {
        var _m$unit6;

        if (m.value === 0) {
          return "".concat(m.value);
        }

        return "".concat(m.value).concat((m === null || m === void 0 ? void 0 : (_m$unit6 = m.unit) === null || _m$unit6 === void 0 ? void 0 : _m$unit6.backupUnit) || '');
      }

      return getCalc('vw', m, d, sm, sd, 'fw');
    });
    functions.add('fh', function () {
      var _d3, _m$unit7, _d4, _d4$unit;

      var m = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var d = arguments.length > 1 ? arguments[1] : undefined;
      var sm = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        value: 240
      };
      var sd = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
        value: 1080
      };
      ((_d3 = d) === null || _d3 === void 0 ? void 0 : _d3.value) === undefined ? d = m : d;

      if (m.value === d.value && (m === null || m === void 0 ? void 0 : (_m$unit7 = m.unit) === null || _m$unit7 === void 0 ? void 0 : _m$unit7.backupUnit) === ((_d4 = d) === null || _d4 === void 0 ? void 0 : (_d4$unit = _d4.unit) === null || _d4$unit === void 0 ? void 0 : _d4$unit.backupUnit)) {
        var _m$unit8;

        if (m.value === 0) {
          return "".concat(m.value);
        }

        return "".concat(m.value).concat((m === null || m === void 0 ? void 0 : (_m$unit8 = m.unit) === null || _m$unit8 === void 0 ? void 0 : _m$unit8.backupUnit) || '');
      }

      return getCalc('vh', m, d, sm, sd, 'fh');
    });
    functions.add('fmin', function () {
      var _d5, _m$unit9, _d6, _d6$unit;

      var m = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var d = arguments.length > 1 ? arguments[1] : undefined;
      var sm = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        value: 240
      };
      var sd = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
        value: 1080
      };
      ((_d5 = d) === null || _d5 === void 0 ? void 0 : _d5.value) === undefined ? d = m : d;

      if (m.value === d.value && (m === null || m === void 0 ? void 0 : (_m$unit9 = m.unit) === null || _m$unit9 === void 0 ? void 0 : _m$unit9.backupUnit) === ((_d6 = d) === null || _d6 === void 0 ? void 0 : (_d6$unit = _d6.unit) === null || _d6$unit === void 0 ? void 0 : _d6$unit.backupUnit)) {
        var _m$unit10;

        if (m.value === 0) return "".concat(m.value);
        return "".concat(m.value).concat((m === null || m === void 0 ? void 0 : (_m$unit10 = m.unit) === null || _m$unit10 === void 0 ? void 0 : _m$unit10.backupUnit) || '');
      }

      return getCalc('vmin', m, d, sm, sd, 'fmin');
    });
    functions.add('fmax', function () {
      var _d7, _m$unit11, _d8, _d8$unit;

      var m = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var d = arguments.length > 1 ? arguments[1] : undefined;
      var sm = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        value: 320
      };
      var sd = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
        value: 1920
      };
      ((_d7 = d) === null || _d7 === void 0 ? void 0 : _d7.value) === undefined ? d = m : d;

      if (m.value === d.value && (m === null || m === void 0 ? void 0 : (_m$unit11 = m.unit) === null || _m$unit11 === void 0 ? void 0 : _m$unit11.backupUnit) === ((_d8 = d) === null || _d8 === void 0 ? void 0 : (_d8$unit = _d8.unit) === null || _d8$unit === void 0 ? void 0 : _d8$unit.backupUnit)) {
        var _m$unit12;

        if (m.value === 0) return "".concat(m.value);
        return "".concat(m.value).concat((m === null || m === void 0 ? void 0 : (_m$unit12 = m.unit) === null || _m$unit12 === void 0 ? void 0 : _m$unit12.backupUnit) || '');
      }

      return getCalc('vmax', m, d, sm, sd, 'fmax');
    });
    functions.add('fd', function () {
      var _d9, _m$unit13, _d10, _d10$unit;

      var m = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var d = arguments.length > 1 ? arguments[1] : undefined;
      var wm = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        value: 320
      };
      var hm = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
        value: 240
      };
      var wd = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
        value: 1920
      };
      var hd = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {
        value: 1080
      };
      ((_d9 = d) === null || _d9 === void 0 ? void 0 : _d9.value) === undefined ? d = m : d;

      if (m.value === d.value && (m === null || m === void 0 ? void 0 : (_m$unit13 = m.unit) === null || _m$unit13 === void 0 ? void 0 : _m$unit13.backupUnit) === ((_d10 = d) === null || _d10 === void 0 ? void 0 : (_d10$unit = _d10.unit) === null || _d10$unit === void 0 ? void 0 : _d10$unit.backupUnit)) {
        var _m$unit14;

        if (m.value === 0) return "".concat(m.value);
        return "".concat(m.value).concat((m === null || m === void 0 ? void 0 : (_m$unit14 = m.unit) === null || _m$unit14 === void 0 ? void 0 : _m$unit14.backupUnit) || '');
      }

      return "calc(((".concat(getForm('vw', m, d, wm, wd), ") + (").concat(getForm('vh', m, d, hm, hd), ")) / 2)");
    });
  }
};