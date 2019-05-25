

var uniqueMorseRepresentations = function(words) {
  
    var codes = [".-","-...","-.-.","-..",".",
    "..-.","--.","....","..",".---","-.-",".-..",
    "--","-.","---",".--.","--.-",".-.","...","-",
    "..-","...-",".--","-..-","-.--","--.."];
var alphabets="abcdefghijklmnopqrstuvwxyz";
    var res = [];
    for(var i=0;i<words.length;i++){
        var temp = "";
        for(var j=0;j<words[i].length;j++){
            var word = words[i][j];
            var index = alphabets.indexOf(word);
            temp+=codes[index];
        }
        if(res.indexOf(temp)<0){
            res.push(temp);
        }
        temp = "";
    }
return res.length;

};

var res = uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]);
console.log(res);