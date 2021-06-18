module.exports = (text = '') => text.match(/[^\/\/ font\-size]font-size+[^;]+;/gi);
