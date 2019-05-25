

'use strict';

    function Cat(name, color){
        this.name = name;
        this.color = color;
    }

    Cat.prototype.age = 5;
    var fluffy = new Cat("local-cat", 5);
    console.log(fluffy.age);
    
    Cat.prototype = {age:6};
    var smiley = new Cat("smiley","brown");
    var muffin = new Cat("muffin", "34");

    console.log(smiley.age);

console.log(muffin.age);
    
