// array version
let toBePrinted = [];

toBePrinted.unshift("math homework");
toBePrinted.unshift("physics paper");
toBePrinted.unshift("english essay");

// console.log(toBePrinted);
// console.log(toBePrinted.pop());
// console.log(toBePrinted.unshift("business plan"));
// console.log(toBePrinted);

// linked list version
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(value) {
        let newNode = new Node(value);
        if (this.length == 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        return ++this.length;
    }
    dequeue() {
        let popped = null;
        if (this.length == 0) return popped;
        else if (this.length == 1) {
            popped = this.head;
            this.head = null;
            this.tail = null;
        }
        else {
            popped = this.head;
            this.head = popped.next;
            popped.next = null;
        }
        this.length--;
        return popped;
    }
}


let printer = new Queue();

printer.enqueue("math homework");
printer.enqueue("physics paper");
printer.enqueue("english essay");

// console.log(printer.dequeue())
// console.log(printer)