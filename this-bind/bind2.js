

////    Non Working Example

let talk = function(){
    console.log(this.sound);
}

let boromir = {
    speak: talk,
    sound:"Woooooof"
}
let test = boromir.speak;
test();

////////////// Working Example

// let talk = function(){
//     console.log(this.sound);
// }

// let boromir = {
//     sound:"Woooooof"
// }

// boromir.speak = talk.bind(boromir);
// //boromir.speak();
// let test = boromir.speak();