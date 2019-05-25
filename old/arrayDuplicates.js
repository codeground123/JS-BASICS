function test() {
    var array1 = new Array("a","b","c");
    var array2 = new Array("c","e");
    for (var i = array1.length - 1; i >= 0; i--) {
      for (var j = 0; j < array2.length; j++) {
        if (array1[i] === array2[j]) {
          array1.splice(i, 1);
          }
        }
      }
      console.log(array1)
    }
test();