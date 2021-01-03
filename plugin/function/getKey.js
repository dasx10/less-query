module.exports = function(a) {
    let data = 'null';
    if(a?.constructor?.name == 'Keyword'){
        data = a.value;
    }
    else if(Object.keys(a.value)?.length > 1){
        for(let i in a.value){
            if(a.value[i].constructor.name == 'Keyword' && a.value[i].value !== 'none'){
                data = a.value[i].value;
            }
        }
    }else{
        if(a.value.constructor.name == 'Keyword' && a.value !== 'none'){
            data = a.value;
        }
    }
    
    return data;
}