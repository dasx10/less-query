const getColor = require('../function/getColor');
module.exports = {
    install: function(less, pluginManager, functions) {
        functions.add('get-color',(a) => {
            let data = 'not';
            if(a?.constructor?.name === 'Color'){
                data = a.value;
            }
            else if(Object.keys(a.value)?.length > 1){
                for(let i in a.value){
                    if(a.value[i].constructor.name === 'Color' || a[i]?.rgb){
                        data = a.value[i].value;
                    }
                }
            }else{
                if(a.value.constructor.name === 'Color'){
                    data = a.value;
                }
            }
            console.log(a);
            return data;
        });
    }
};