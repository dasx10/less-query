module.exports = (value) => {
    if(typeof value != 'number'){
        value = parseInt(value) || 0;
        if(isNaN(value)) value = 0;
    }
    return value || 0;
}