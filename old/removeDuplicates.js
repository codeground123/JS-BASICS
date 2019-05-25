

function removeDuplicates(arr){


 var temp = [];
 var j = 0;

 for(var i=0;i<arr.length;i++){
     if(arr[i] !== arr[i+1]){
         temp[j++] = arr[i];
     }
 }

 return temp;

}


var res = removeDuplicates([1, 2, 2, 3, 4, 4, 4, 5, 5, 6]);
console.log(res);