module.exports.log = (...a) => {
    console.log(a[0].value);
    return "";
}
module.exports.error = (...a) => {
    console.log("\x1b[31m",a[0].value,'\x1b[0m');
    return "";
}
module.exports.dir = (...a) => {
    console.log(...a);
    return "";
}