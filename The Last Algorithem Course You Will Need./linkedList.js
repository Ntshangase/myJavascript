
// node --experimental-modules linkedList.js

/**linkedList are data structures similar to arrays but also fundamentally different,
 * they don't have the array strength of having an index, thus i can't iterate through an 
 * linkedList. I have to use a pointer/ be guided by pointer called .next.
 * A node has two elements inside it, node[value,next]; node.value= is what is stored 
 * the node itself while node.next= points to the next node. when node.next = null; that's
 * when we know we have reached the end of our linkedList.
 */

/**
 * const nodeList = { 
 *    head :{
 *            value= "name";
 *             next :{
 *                    value : "name2";
 *                     next :{ 
 *                            value : "name3";
 *                             next : null
 *          }
 *        }
 *     }
 *  }
 * }
 */

// I have to create my own node in javascript.
class NewNode{
    constructor(data){
        this.value = data;
        this.next = null;   // pointer.
    }
}
// I have to create my own linkedList Data Structure which is just an object on objects, on objects.
class List {
    constructor(data = null){
        this.head = data
    }
} 


function addNode(){
    // create a new node from node constructor.
    let node1 = new NewNode("simphiwe");
    let node2 = new NewNode("ntokozo");
    let node3 = new NewNode("ntshangase");
    let node4 = new NewNode("manxanga");
    let node5 = new NewNode("ntshumo");

    // append the nodes to the list.
    let list1 = new List(node1);

    // set node pointers.
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;  // the last node is automaticall at null.
    
    // consoler...
    console.log(node1);
    console.log(node2);
    console.log(node3);
    console.log(node4);
    console.log(node5);
}

// function to run.
addNode();
