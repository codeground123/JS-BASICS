

var dog = {
    sound: "woof",
    talk: function(){
        console.log(this.sound);
    }
}

var bark = dog.talk.bind(dog);
bark();
 var boundedFunc = bark.bind(dog);
boundedFunc();