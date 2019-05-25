// function fibonacci(n){
//     return n < 1 ? 0
//             : n <2 ? 1
//             : fibonacci(n-1) + fibonacci(n-2);
// }

// var res = fibonacci(5);
// console.log(fibonacci(4));

var i;
var fib = [0, 1];
var limit = 4;
for(i = 2; i< parseInt(limit); i++){
fib[i] = fib[i-2]+fib[i-1];
// console.log(fib[i]);
}
console.log(fib);


