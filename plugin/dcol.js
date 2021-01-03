module.exports = {
    install: function(less, pluginManager, functions) {
        functions.add('dcol',function(count, offset) {
            let result = '';
            for(let i = 1; i < +count.value; i++){
                result += 
                `
                rgba(100,0,0,0.5) calc(${i}00% / ${count.value}) calc(${i+1}00% / ${count.value} - ${offset.value}px),
                
                `;

                if(i !== +count.value -1){
                    result +=`rgba(0,100,0,0.5) calc(${i+1}00% / ${count.value} - ${offset.value}px) calc(${i+1}00% / 12)`
                }
                
                if(i === +count.value -1) continue;
                
                result += ',';
            }
            return result;
        });
    }
};