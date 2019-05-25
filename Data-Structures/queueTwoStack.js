

var stack1 = [];
var stack2 = [];


function Enqueue(item){
  stack1.push(item);
}

function Dequeue(){
  if(stack2.length === 0){
    if(stack1.length === 0){
      console.log("Queue is empty");
      return;
    }
    while(stack1.length > 0){
      stack2.push(stack1.pop());
    }
  }
  return stack2.pop();
}
Enqueue('a');
Enqueue('b');
Enqueue('c');
Dequeue(); 
console.log(stack2);