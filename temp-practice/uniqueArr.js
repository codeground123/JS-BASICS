
var data = [1,2,3,3,1,4];
// Array.prototype.unique = function(){
//     var arr = [];
//     for(var i=0;i<this.length;i++){
//         if(arr.indexOf(this[i]) < 0){
//             arr.push(this[i]);
//         }
//     }
//     return arr;
// }

// console.log([1,2,3,3,1,4].unique());

var unique = function(xs) {
    var seen = {}
    return xs.filter(function(x) {
      if (seen[x])
        return
      seen[x] = true
      return x
    })
  }

var res = unique(data);
console.log(res);