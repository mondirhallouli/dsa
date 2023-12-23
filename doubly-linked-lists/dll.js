class Node {
    constructor(value) {
        this.value = value;
        this.previous = null;
        this.next = null;
    }
}

class DLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        let newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.previous = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        let popped = null;
        if (this.length === 0) return popped;
        if (this.head === this.tail) {
            popped = this.head;
            this.head = null;
            this.tail = null;
        }
        else {
            popped = this.tail;
            this.tail = popped.previous;
            this.tail.next = null;
        }
        this.length--;
        return popped;
    }

    unshift(value) {
        let newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head.previous = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift() {
        let shifted = null;
        if (this.length === 0) return shifted;
        if (this.head === this.tail) {
            shifted = this.head;
            this.head = null;
            this.tail = null;
        }
        else {
            shifted = this.head;
            this.head = shifted.next;
            this.head.previous = null;
        }
        this.length--;
        return shifted;
    }

    get(position) {
        let target, i;
        if (position < 0 || position >= this.length) return null;
        if (position > (this.length / 2)) {
            target = this.tail;
            i = this.length - 1;
            while (i != position) {
                target = target.previous;
                i--;
            }
        }
        else {
            target = this.head;
            i = 0;
            while (i != position) {
                target = target.next;
                i++;
            }
        }
        return target;
    }
    set(value, position) { }
    insert(value, position) { }
    remove(position) { }
    reverse() { }
}

let nodeList = new DLL();
nodeList.push(1);
nodeList.push(2);
nodeList.push(3);

console.log(nodeList);
console.log("==========================================================")
console.log(nodeList.get(0));

// this is a test line