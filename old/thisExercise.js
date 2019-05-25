var b =1;
function outer(){

    var b =2;

    function inner(){
        b++;
        var b = 6;
        console.log(b);

    }
    inner();
}

outer();


// console.log(1<2<3);
// console.log(3>2>1);

// var x =20;
// var test = function(){
//     console.log(x);
//     var x = 33;
//     var anFunc = function(){
//         console.log("From returned func: "+ x);
//     }
//     return anFunc;
// }

// test()();





// (function(){
//  try {
//      throw new Error();
//  } catch(x){
//      var x=1, y=2;
//      console.log(x);
//  }
//  console.log(x);
//  console.log(y);
// })();




// var hero = {
//     _name: "Phani",
//     getName: function(){
//         return this._name;
//     }
// }

// var res = hero.getName;
// var test = res.bind(hero);
// console.log(test());















var myObject = {
    foo: "bar",
    func: function(){
        var self = this;
        console.log("outer func:  this.foo= " + this.foo);
        console.log("outer func:  this.foo= " + self.foo);
        (function(){
            console.log("Inner func:  this.foo= " + this.foo);
            console.log("Inner func:  this.foo= " + self.foo);

        }());

    }
}

//myObject.func();

var a ={},
    b={key: 'b'},
    c={key: 'c'};

    a[b] = 123;
    a[c] = 456;

    //console.log(a);