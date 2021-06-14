const intOrZero = require('./intOrZero');
const getCof = require('./getCof');
const getCorrect = require('./getCorrect');
module.exports = ( met, m, d, sm, sd, name = 'fd') => {
    let cof = 0;
    let correct = 0;
    let type = m?.unit?.backupUnit||d?.unit?.backupUnit||'';
    if((type !== d?.unit?.backupUnit) && (d?.unit?.backupUnit !== undefined)){
        console.log("\x1b[31m",
        `invalid unit ${d?.unit?.backupUnit}, in ${name}(${m.value}${m?.unit?.backupUnit||''},${d.value}${d?.unit?.backupUnit||''})`,
        '\x1b[0m');
    }
    m.value = intOrZero(m.value);
    d.value = intOrZero(d.value);
    sm.value = intOrZero(sm.value);
    sd.value = intOrZero(sd.value);

    cof = getCof(m.value,d.value,sm.value,sd.value);
    correct = getCorrect(cof,m.value,sm.value);
    return `${correct}${type} + (100${met} * ${cof})`;
}
