

var res =  {"matchObject":"{\"data\":[{\"id\":\"jack1\",\"firstname\":\"jack\",\"lastname\":\"hudson\",\"dob\":\"1990-01-01T00:00:00.000Z\",\"email\":\"jack1@yahoo.com\",\"phone\":null,\"orgid\":\"001\"},{\"id\":\"jack2\",\"firstname\":\"Jack\",\"lastname\":\"Clinton\",\"dob\":\"1991-01-01T00:00:00.000Z\",\"email\":\"jack.clinton@yahoo.com\",\"phone\":\"+16464922600\",\"orgid\":\"002\"}]}"};
var parsedObj = JSON.parse(res.matchObject);

var res = [];
for(var key in parsedObj.data){
    var emailObj = {};
    var phoneObj = {}
    if(parsedObj.data[key].email !== null){
        emailObj.matchedRes = parsedObj.data[key].email;
        emailObj.id = parsedObj.data[key].id;
        emailObj.type = "email";
        res.push(emailObj);
    }
    if(parsedObj.data[key].phone !== null){
        phoneObj.matchedRes = parsedObj.data[key].phone;
        phoneObj.id = parsedObj.data[key].id;
        phoneObj.type="phone";
        res.push(phoneObj);
    }//  
}
console.log(res);

[ { matchedRes: 'jack1@yahoo.com', id: 'jack1', type: 'email' },
  { matchedRes: 'jack.clinton@yahoo.com', id: 'jack2', type: 'email' },
  { matchedRes: '+16464922600', id: 'jack2', type: 'phone' } ]