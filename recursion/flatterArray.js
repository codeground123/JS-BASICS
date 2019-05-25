

let data = [1,2,[3,4],[5,6,7,[8,9]]];

var flatten = function(arr){

    var results = [];
    arr.forEach(function(value){
        if(Array.isArray(value)){
            results = results.concat(flatten(value));
        } else {
            results.push(value);
        }
    });
 return results;
}

console.log(flatten(data));