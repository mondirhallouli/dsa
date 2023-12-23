// array version
let history = [];

history.push("www.chat.openai.com");
history.push("www.notion.se");
history.push("www.react.dev");
history.push("www.mail.google.com");
history.push("www.youtube.com");

// console.log(history.pop());
// console.log(history.push('www.tcbscans.com'));
// console.log(history);

// linked list version
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    unshift(value) {
        let newNode = new Node(value);
        if (this.length == 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    shift() {
        let shifted = null;
        if (this.length == 0) return shifted;
        else if (this.length == 1) {
            shifted = this.head;
            this.head = null;
            this.tail = null;
        }
        else {
            shifted = this.head;
            this.head = shifted.next;
            this.head.prev = null;
            shifted.next = null;
        }
        this.length--;
        return shifted;
    }
    print() {
        let stacked = [];
        let node = this.tail;
        while (node) {
            stacked.push(node.value);
            node = node.prev;
        }
        return stacked;
    }
}

let myStack = new Stack();

myStack.unshift("www.chat.openai.com");
myStack.unshift("www.notion.se");
myStack.unshift("www.react.dev");
myStack.unshift("www.mail.google.com");
myStack.unshift("www.youtube.com");

console.log(myStack.shift())
console.log(myStack.print())