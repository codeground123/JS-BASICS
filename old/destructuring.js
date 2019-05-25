let car ={id:4000, style:"sedan", make:"bmw", year:"2000"};

var {id, style, ...others} = car;

// or   --- >    ({id, style} = car); 



console.log(others);


// let arr = [1,2,3,4];

// let [k1,k2, ...k3] = arr;

// console.log(k3);