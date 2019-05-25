
// rot by 4
var input = [1, 2, 3, 4, 5, 9, 23];

function rotLeft(a, d) {
    var arr = a;
  
    for (var j = 1; j <= d; j++) {
        arr.shift(arr.push(arr[0]));
    }
    return arr;
}

var res = rotLeft(input, 4);
console.log(res);