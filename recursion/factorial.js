

function factorial(n){
    if(n===1){
        return 1;
    }
    return n*factorial(n-1);
}

var res = factorial(4);
console.log(res);