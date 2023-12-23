class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        let newNode = new Node(value);
        if (this.length == 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        let popped = null;
        if (this.length == 0) return popped;
        else if (this.length == 1) {
            popped = this.tail;
            this.head = null;
            this.tail = null;
        }
        else {
            let popped = this.tail;
            let newTail = popped.prev;
            this.tail = newTail;
            this.tail.next = null;
        }
        this.length--;
        return popped;
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
            let newHead = this.head;
            this.head = newHead.next;
            this.head.prev = null;
            newHead.next = null;
        }
        this.length--;
        return shifted;
    }
    get(position) {
        let i, target;
        if (position < 0 || position >= this.length) return null;
        else if (position >= this.length / 2) {
            i = this.length - 1;
            target = this.tail;
            while (i != position) {
                target = target.prev;
                i--;
            }
        }
        else {
            i = 0;
            target = this.head;
            while (i != position) {
                target = target.next;
                i++;
            }
        }
        return target;
    }
    set(value, position) {
        let target = this.get(position);
        if (target) {
            target.value = value;
            return true;
        }
        return false;
    }
    insert(value, position) {
        if (position < 0 || position > this.length) return null;
        else if (position === this.length) return this.push(value);
        else if (position === 0) return this.unshift(value);

        let newNode = new Node(value);
        let next = this.get(position);
        let prev = next.prev;
        newNode.prev = prev;
        prev.next = newNode;
        newNode.next = next;
        next.prev = newNode;

        this.length++;
        return this;
    }
    remove(position) {
        if (position < 0 || position >= this.length) return null;
        else if (position === this.length - 1) return this.pop();
        else if (position === 0) return this.shift();

        let target = this.get(position);
        let prev = target.prev;
        let next = target.next;
        prev.next = next;
        next.prev = prev;

        this.length--;
        return target;
    }
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            node.prev = next;
            prev = node;
            node = next;
        }
        return this;
    }
}

let list = new DoublyLinkedList();

list.push("A");
list.push("B");
list.push("C");

console.log(list.reverse())