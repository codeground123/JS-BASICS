function convertDiagnol(arr,m,n){

    for(var i=0;i<m;i++){
        for(var j=0;j<n;j++){
            if(i===j || (i+j+1)===n){
                arr[i][j] = 0;
            }
        }
    }
 return arr;
}

var res = convertDiagnol([[1,2,3],[4,5,6], [7,8,9]], 3, 3);

console.log(res);