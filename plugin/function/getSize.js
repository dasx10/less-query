function getSize(a) {
    if(Object.keys(a.value)?.length > 1){
        for(let i in a.value){
            if(typeof a.value[i].value == 'number'){
                return a.value[i].value+(a.value[i].unit?.backupUnit||"");
            }
        }
    }else{
        if(typeof a.value == 'number'){
            return a.value+(a.unit?.backupUnit||"");
        }
    }
    
    return 'not';
}

module.exports = getSize;