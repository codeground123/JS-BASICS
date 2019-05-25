

var arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];

var res = arr.filter(function(item, pos){
    return arr.indexOf(item) === pos;
})

console.log(res);