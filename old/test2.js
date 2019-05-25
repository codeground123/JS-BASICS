var res =  {"matchObject":"{\"data\":[{\"id\":\"jack1\",\"firstname\":\"jack\",\"lastname\":\"hudson\",\"dob\":\"1990-01-01T00:00:00.000Z\",\"email\":\"jack1@yahoo.com\",\"phone\":null,\"orgid\":\"001\"},{\"id\":\"jack2\",\"firstname\":\"Jack\",\"lastname\":\"Clinton\",\"dob\":\"1991-01-01T00:00:00.000Z\",\"email\":\"jack.clinton@yahoo.com\",\"phone\":\"+16464922600\",\"orgid\":\"002\"}]}"};
var parsedObj = JSON.parse(res.matchObject);

let op = parsedObj.data.reduce((out,{id,email,phone})=>{
  if(email){
    out.push({matchedRes:email,id,type:`email`})
  } 
  if(phone){
  out.push({matchesRes:phone,id,type:`phone`})
  }
  return out
},[])

console.log(op)


// let arr = [1,2,3,"*" , 4, "*" , 7 , 8 ,9 ,"*", 10,11, "*", 12 , "*"];
// let temp = []
// let op = arr.reduce((o,c)=>{
//   if(c !== '*'){
//     temp.push(c)
//   } else {
//    if(temp.length){
//     o.push(temp);
// }
//     temp=[];
//   }
//   return o;
// },[])
// console.log(op)