const fetch = require("node-fetch");

async function fetchAvatar(userId){
   
   const data = await fetch("https://catappapi.herokuapp.com/users/123");
console.log("*********************");

let res = await data.json();
console.log(res.imageUrl);
    // return fetch("https://catappapi.herokuapp.com/users/123")
    // .then(response => response.json())
    // .then(data => data.imageUrl);
}

const res = fetchAvatar(123);

console.log(res);