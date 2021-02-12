module.exports.toEm = function(val, def) {
    if(val.value === 0) return '0';
    if(def && def.value) return val.value / def.value + "em";
    return val.value / 16 + "em";
};

module.exports.toRem=function(val, def) {
    if(val.value === 0) return '0';
    if(def && def.value) return val.value / def.value + "rem";
    return val.value / 16 + "rem";
}

module.exports.toP=function(val, def) {
    if(val.value === 0) return '0';
    return (val.value / def.value) * 100 + "%";
}

module.exports.toW=function(val, def) {
    if(val.value === 0) return '0';
    return (val.value / def.value) * 100 + "vw";
}

module.exports.toH=function(val, def) {
    if(val.value === 0) return '0';
    return (val.value / def.value) * 100 + "vh";
}

module.exports.toMi=function(val, def) {
    if(val.value === 0) return '0';
    return (val.value / def.value) * 100 + "vmin";
}

module.exports.toM=function(val, def) {
    if(val.value === 0) return '0';
    return (val.value / def.value) * 100 + "vmax";
}

module.exports.toPx=function(val, def = {}) {
    if(val.value === 0) return '0';
    let numerator = val.unit.numerator && val.unit.numerator[0];
    console.log(numerator === '%')
    switch(numerator){
        case '%':
        case 'vh':
        case 'vw':
        case 'vmax':
        case 'vmin':
        def.value = (def && def.value) || 1920;
        return (val.value / 100) * def.value + "px";
        case 'em':
        case 'rem':
        def.value = (def && def.value) || 16;
        return val.value * def.value + "px";
        default:
        return val;
    }
}