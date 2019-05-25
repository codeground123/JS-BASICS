

function power(base, exponent){
    if(exponent===1){
        return 1;
    }
    return base * power(base, exponent-1);
}

var res = power(2,6);
console.log(res);