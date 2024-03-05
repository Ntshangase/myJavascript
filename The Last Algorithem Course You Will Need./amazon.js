
// node --experimental-modules amazon.js

const abc = [1,2,3,4,5,6,7,8,9]
// linear search
function linearSearch(arr,x){
    for(let i=0; i < arr.length; i++){
        if(arr[i] === x){
            console.log(arr[i],"is equall to", x);
        }
    }
}

// binary search
function binarySearch(arr,neddle){
    // high and low
    let low = 0;
    let high = arr.length;

    //loop through the arr, by cutting it in half until while low < high
    do{
        // find the median and median value.
        let median = Math.floor(low + (high - low)/2);
        let medianValue = arr[median];
        // everytime we cut the arr in half and check if our median.value === input.
        if(medianValue === neddle){
            console.log("binarySearch complete");
            console.log(medianValue, "eqauls to: ", neddle);
            return;
        } else if(medianValue > neddle){
            high = median;
        } else { low = median + 1}
    }while(low < high)
}

// bubble Sort()
// we are going to iterate through the array and return an X > X + 1
let cba = [3,5,9,1,4,0]
function bubbleSort(arr){
    // iterate through the array to get x
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-1-i; j++) {
            // if x > x+1 swap using temp
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return console.log(arr);
}

// linkedList
// i need to be able to find() and element in a linkedList and either remove/return it.
class newNode{
    constructor(head, iterator = null){
    this.value = head;
    this.next = iterator;
    }
}   // i can now create nodes with .value/.next properties.

class linkedList{
    constructor(node = null){
        this.head = node;
        this.size = 0;
    }
}   // i can now create a class which points to hear property.

// a function to add elements in a linkedList.
function addElement(value){
    let node = new newNode(value); // create a node first.
    let current ;

    let ll = new linkedList();
    if(ll.head === null){
        ll.head = node;
    } else {
        current = ll.head; // simqale ekhanda with the iterator.(head[value,next] and size)

        // senzani manje?
        while(current.next !== null){
            current = current.next;
        } // after this is false we execute below
        current = node;
    }
    ll.size++;
    console.log("added")
    return console.log(ll);
}

// remove element from linkedlist.

function removelink(){}

// a function to find an element in a linkedList.
function elementFinder(head,n){
    // ll => linkedList and n => n-th element(node.value property.)

    //insert elements to node in reverse for pointer undeclared reference error.
    let Node5 = new newNode("google");
    let node4 = new newNode("netflix", Node5);
    let node3 = new newNode("amazon",node4);
    let node2 = new newNode("apple",node3);
    let node1 = new newNode("facebook",node2);

    // institiate linkedList
    ll = new linkedList(node1); // head should be here.

    // while loop for iteration.
    let temp = ll.head;
    // i need the three iterators.
   


}

//function to run.
addElement("added through function");
