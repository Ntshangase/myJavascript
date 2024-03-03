
// node --experimental-modules sort.js

/**linkedList are data structures similar to arrays but also fundamentally different,
 * they don't have the array strength of having an index, thus i can't iterate through an 
 * linkedList. I have to use a pointer/ be guided by pointer called .next.
 * A node has two elements inside it, node[value,next]; node.value= is what is stored 
 * the node itself while node.next= points to the next node. when node.next = null; that's
 * when we know we have reached the end of our linkedList.
 */

// I have to create my own node in javascript.
class NewNode{
    constructor(data){
        this.value = data;
        this.next = null;
    }
}