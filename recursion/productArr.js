

// function arrayProduct(arr){
//     if(arr.length === 0){
//         return 0;
//     }
//     return arr.shift() * arrayProduct(arr);
// }


function productOfArray(array){
	if(array.length === 0) return 1;

	return array.shift() * productOfArray(array);
}

var res = productOfArray([1,2,3,4,5]);
console.log(res);