


function sumRange(n){
    var res = 0;
    if(n ===1){
        return 1;
    } 
    return n + sumRange(n-1);
}

var res = sumRange(3);
console.log(res);