const rootMode = /:root+[^}]+}/; // find :root{@any}
const htmlMode = /html+[^}]+}/; // find html{@any}
const fzMode = /font-size+[^;]+;/ // find font-size:@any;

let resultRoot = [];
globalThis.rootParam = '16px';
let fzResult = [];

const getParams = (file, skipeRoot = false) => {
    if(!skipeRoot){
        resultRoot = rootMode.exec(file) || [];
		if (!resultRoot?.length) {
			return getParams(file, true);
		}
		fzResult = fzMode.exec(resultRoot[0]) || [];
		resultRoot = [];
		globalThis.rootParam = fzResult[0].replace(';','').split(':')[1];
		return globalThis.rootParam;
    }

    resultRoot = htmlMode.exec(file) || [];
    if(resultRoot) {
        fzResult = fzMode.exec(resultRoot[0]) || [];
        if(fzResult.length){
            return globalThis.rootParam = fzResult[0].replace(';','').split(':')[1];
        }
    }


    return globalThis.rootParam;
}

const getRoot = () => globalThis.rootParam;

module.exports = {
    getParams,
    getRoot
}