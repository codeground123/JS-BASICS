function missing(arr) {
   


    var missing = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i+1]- arr[i] >1){
            missing.push(arr[i+1]-1);
        }
    }
    return missing;
}
  
  console.log(missing([0,1,3,4,6,8]));