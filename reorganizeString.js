

/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(str) {
    
    
    var  S = str.split('');
    
    for(var i=0;i<S.length;i++){
        if(  (S[i]=== S[i+1])  && (S[i+2] && S[i+2]!==S[i]) ){
            S[i+1] = S[i+2];
            S[i+2] = S[i];
        }
    }
    
    return S.join('');
};

var res = reorganizeString("aaab");
console.log(res);