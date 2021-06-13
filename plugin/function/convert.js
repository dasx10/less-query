const isFalsy = (props) => !props || props.value === 0;

const toEme = (props, def, unit) => isFalsy(props) ? '0' : (props.value / def.value) + unit;
const DEm = { value: 16 };
module.exports.toEm  = (props, def = DEm) => toEme(props, def, 'em');
module.exports.toRem = (props, def = DEm) => toEme(props, def, 'rem');

const toFull = (props, def, unit) => isFalsy(props) ? '0' : ((props.value / def.value) * 100) + unit;
const DFull = { value: 1920 };
module.exports.toP  = (props, def = DFull) => toFull(props, def, '%');
module.exports.toW  = (props, def = DFull) => toFull(props, def, 'vw');
module.exports.toH  = (props, def = DFull) => toFull(props, def, 'vh');
module.exports.toM  = (props, def = DFull) => toFull(props, def, 'vmax');
module.exports.toMi = (props, def = DFull) => toFull(props, def, 'vmin');

module.exports.toPx = function(props, def = {}) {
    if(isFalsy(props)) return '0';
    let numerator = props.unit.numerator && props.unit.numerator[0];
    console.log(numerator === '%')
    switch(numerator){
        case '%':
        case 'vh':
        case 'vw':
        case 'vmax':
        case 'vmin':
        	def.value = (def && def.value) || 1920;
        return (props.value / 100) * def.value + "px";

        case 'em':
        case 'rem':
        	def.value = (def && def.value) || 16;
        return props.value * def.value + "px";

        default:
        return props;
    }
}