

function rotLeft(a, d){
    var arr = a;

    for(var i=1; i<=d; i++ ){
        arr.shift(arr.push[arr[0]]);
    }

    return arr;

}

var res = rotLeft([1, 2, 3, 4, 5, 9, 23], 4);
console.log(res);
