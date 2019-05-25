function moveZeroes(arr){

    var count = 0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]!==0){
            arr[count++]=arr[i];
            count+=1;
        }
    }
    while(count<arr.length){
        arr[count++] = 0
    }

    return arr;

}

var res = moveZeroes([1,0,3,0,4,5]);

console.log(res);