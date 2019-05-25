function angryProfessor(k, a) {

    // var count = 0;
    // for(var i=0; i<a.length; i++){
    //     if(a[i] <= 0){
    //         count++;
    //     }
    // }
    // if(count < k){
    //     return "YES";
    // }

    // return "NO";

    var res = a.filter(function(item){
        return item <=0;
    }).length;

    return res < k ? "YES": "NO";

}

var res = angryProfessor(2, [0, -1, 2, 1]);
console.log(res);