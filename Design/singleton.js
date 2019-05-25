
var SingleTonClass = (function(){
   
    function SingleTonClass(){

    }
    var instance;

    return {
        getInstance: function(){
            if(instance === null){
                instance = new SingleTonClass();
            }
            return instance;
        }
    }
})();

var s1 = SingleTonClass.getInstance();
var s2 = SingleTonClass.getInstance();
console.log(s1===s2);

var s3 = new SingleTonClass();
console.log(s3===s2);

