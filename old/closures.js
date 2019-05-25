

//https://stackoverflow.com/questions/111102/how-do-javascript-closures-work

function sayHello2(name){

    var text = "Hello" + name;
    var say = function() {
        console.log(text);
    }
    return say;
}

// var res = sayHello2("Bob");
// console.log(res());

/* ************   Another Example   ***************   */

function sayNumber(){

   var num = 50;
   var say = function(){
       console.log(num);
   }
   num++;
    return say;
}


// var res = sayNumber();
// console.log(res());

/* **********   Another Example   ****************   */

var gLogNumber, gIncreaseNumber, gSetNumber;
function setupSomeGlobals() {
  // Local variable that ends up within closure
  var num = 42;
  // Store some references to functions as global variables
  gLogNumber = function() { console.log(num); }
  gIncreaseNumber = function() { num++; }
  gSetNumber = function(x) { num = x; }
}

setupSomeGlobals();
gIncreaseNumber();
gLogNumber(); 
 gSetNumber(5);
gLogNumber(); 

// var oldLog = gLogNumber;
console.log("*************");
// setupSomeGlobals();
// gLogNumber(); 

//oldLog() // 5