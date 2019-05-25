

function twoSum(arr, target) {

    var hashObj = {};
    var sums = [];
    for (var i = 0; i < arr.length; i++) {

        var sumMinusElem = target - arr[i];
         
        if(hashObj[sumMinusElem] !== undefined){
            sums.push([arr[i], sumMinusElem]);
        }
        hashObj[arr[i]] = arr[i];
    }
return sums;
}

var res = twoSum([1, 4, 2], 6);