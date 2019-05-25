

function isSubArray(a, b, n,m){



    var i =0; j = 0;

    while(i<n && j< m){

        if(a[i] === b[j]){
            i++;
            j++
            if(j===m){
                return true;
            }
        } else {
            i++;
            j=0;
        }

    }
    return false;
}

var a = [ 2, 3, 0, 5, 1, 1, 2 ]; 
        var b = [ 3,  5, 1 ]; 

        var res = isSubArray(a, b, a.length, b.length );
        console.log(res);