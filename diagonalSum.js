function diagonalDifference(arr) {

    var startRes = 0;
    var endRes = 0;
    var arrLen = arr.length-1;

    for (var i = 0; i < arr.length; i++){
        startRes += arr[i][i];
        endRes += arr[i][arrLen];
        arrLen--;
    } 
    return Math.abs(startRes - endRes);  
}

var res = diagonalDifference([ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]);
console.log( res);