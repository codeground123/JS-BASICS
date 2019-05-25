let dog = {
    sound:"woof",
    talk: function(){
        console.log(this.sound);
    }
}

// let dogFunc = dog.talk;
// let boundedFunc = dogFunc.bind(dog);

/*  Another Example  */

function talk(){
    console.log(this.sound);
}

let boromir = {
    sound:"one does not siplly talk"
}

// let talkBound = talk.bind(boromir);
// talkBound();

/*  Another Example  */

let tell = function(){
    console.log(this.sound);
}

let shepard = {
    sound:"one does not siplly talk"
}

shepard.speak = tell.bind(shepard);
shepard.speak();
