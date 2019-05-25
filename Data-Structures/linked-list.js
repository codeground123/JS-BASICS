//https://www.youtube.com/watch?v=MozZbtPyqt8&list=PLsKebnYLuVOU8DuvHPmg-FXMbsK-AnKI-
//ht(tps://gist.github.com/anonymous/3cd48cd4cb6acd07f2994769f4109ec0



function LinkedList() {
    this.head = null;
}

LinkedList.prototype.isEmpty = function(){
    return this.head === null;
}

LinkedList.prototype.size = function() {

    var current = this.head;
    var count = 0;

    while(current !== null){
        count++;
        current = current.next;
    }

    return count;
}



LinkedList.prototype.prepend = function(val) {

    var newNode = {
        data: val,
        next : this.head
    }

    this.head = newNode;
}

LinkedList.prototype.append = function(val){
    var newNode ={
        data: val,
        next: null
    }

    if(this.isEmpty()){
        this.head = newNode;
        return;
    }

    var current = this.head;

    while(current.next !== null){
        current = current.next;
    }
    current.next = newNode;


}

LinkedList.prototype.contains = function(val){
    var current = this.head;

    while(current !==null ){
        if(current.data === val){
            return true;
        }
        current = current.next;
    }
    return false;
}

LinkedList.prototype.remove = function(val){
    if(!this.contains(val)){
        return;
    }
    if(this.head.data === val){
        this.head = this.head.next;
        return;
    }

    var prev = null;
    var curr = this.head;

    while(curr.data !== val){
        prev = curr;
        curr = curr.next;
    }
    prev.next = curr.next;


}

LinkedList.prototype.print = function() {

    var output = '[';
    debugger;
    var current = this.head;
  
    while (current !== null) {
      output += current.data;
      if (current.next !== null) {
        output += ', ';
      }
      current = current.next;
    }
  
    output += ']';
    console.log(output);

}



var list = new LinkedList();
//list.prepend(10);
//list.prepend(100);
list.append(20);
list.append(200);
list.append(100);
list.remove(200);
list.print();

list.remove(1090);
//list.print();
