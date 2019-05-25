

var swap = function(array, firstIndex, secondIndex){
    var temp = array[firstIndex];
    array[firstIndex]  = array[secondIndex];
    array[secondIndex] = temp;
};

function SelectionSort(items) {

    for(var i=0; i<items.length;i++){
        var min = i;
        for(var j=i+1; j<items.length; j++){
            if(items[j] < items[min]){
                min = j;
            }
        }
        swap(items, i, min);
    }
    
    console.log(items);
}

SelectionSort([2,1,5,6,4,3]);

//i=0   min=2     1 2 5 6 4 3 
//i=1   min = 1  1 2 5 6 4 3 
//i=2   min=5 