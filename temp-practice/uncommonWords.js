

var uncommonWords = function(a,b){

    var unique = {};
    var result = [];

    var combinedArr = a.concat(' ' + b).split(' ');
    //console.log(combinedArr);
    combinedArr.forEach(x => {
        if(unique[x]){
            unique[x] = false;
        } else{
            unique[x] = true;
        }
    });

    for(var key in unique){
        if(unique[key]){
            result.push(key);
        }
    }

return result;

}

console.log(uncommonWords("apple apple", "banana"));