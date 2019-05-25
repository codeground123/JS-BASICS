






/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, s) {
    
    var jewels = J;
    var count = 0;
    var splitWord = s.split('');
    for(var i=0; i < splitWord.length; i++)
    {
        var word = splitWord[i];

        if(jewels.indexOf(word) > -1){
            count+=1;           
        }
      
    }
    return count;

};

var res = numJewelsInStones("aA", "aAAbbbb");
console.log(res);