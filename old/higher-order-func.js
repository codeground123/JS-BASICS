//Higher Order Functions

//https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84

/*
Higher order functions provide facility to pass one function into another function
In the below example filter accepts another callback function which returns filtered data

This 'filter' method from Javascript is a good example of Higher order Function.



*/



var animals= [
    {name:'fluffykins', species:"rabbit"},
    {name:'caro', species:"dog"},
    {name:'Hamilton', species:"dog"},
    {name:'ursula', species:"dog"},
    {name:'Jimmy', species:"cat"}
];


var res = animals.filter(function(animal){
            return animal.species === "dog"
});
console.log(res);

// var dogs= [];

// for(var i=0;i<animals.length;i++){
//     if(animals[i].species === "dog"){
//         dogs.push(animals[i].name)
//     }
// }

//console.log(dogs.join('-'));