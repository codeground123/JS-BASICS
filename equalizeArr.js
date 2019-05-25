function equalizeArray(arr) {

    var res = {};
    for (var i = 0; i < arr.length; i++)
    {
        if (res[arr[i]]) {
            res[arr[i]] += 1;
        } else {
            res[arr[i]] = 1;
       }
    }
    var final = [];
    for (key in res) {
        if (res[key] === 1) {
            final.push(key);   
        }
    }
    return final.length;

}

var res = equalizeArray([1, 2, 3, 1, 2, 3, 3, 3]);
console.log(res);