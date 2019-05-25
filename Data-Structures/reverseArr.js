function rvereseArray( arr,  start,  end) 
{ 
  
    while(start<end){
        var temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
console.log(arr);
}


rvereseArray([1,2,3,4,5,23,33], 0,6);
