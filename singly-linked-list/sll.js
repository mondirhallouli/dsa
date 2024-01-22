class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        let newNode = new Node(value);
        if (this.head === null || this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.length) return undefined;
        else if (this.head === this.tail) {
            let popped = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return popped;
        }

        let newTail = this.head;
        let oldTail = newTail.next;
        while (oldTail.next) {
            newTail = newTail.next;
            oldTail = newTail.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        return oldTail;
    }

    unshift(value) {
        let newNode = new Node(value);
        if (this.head == null) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift() {
        let shifted, newHead;
        if (this.length === 0) {
            shifted = undefined;
        }
        if (this.head === this.tail) {
            shifted = this.head;
            this.head = null;
            this.tail = this.head;
            this.length--;
        }
        else {
            shifted = this.head;
            newHead = shifted.next;
            shifted.next = null;
            this.head = newHead;
            this.length--;
        }
        return shifted;
    }

    get(position) {
        if (position < 0 || this.length <= position) return undefined;
        let target = this.head;
        let counter = 0;
        while (counter != position) {
            target = target.next;
            counter++;
        }
        return target;
    }

    set(value, position) {
        let target = this.get(position);
        if (target != undefined) {
            target.value = value;
            return true;
        }
        return false;
    }

    insert(value, position) {
        if (position < 0 || position > this.length) return false;
        if (position === 0) {
            this.unshift(value);
            return true;
        }
        if (position === this.length) {
            this.push(value);
            return true;
        }
        // create node to be inserted
        let newNode = new Node(value);
        // find the node that's before it
        let nodeBefore = this.get(position - 1);
        // find the node that's after it
        let nodeAfter = nodeBefore.next;
        // link the node to be intserted to it's next node
        newNode.next = nodeAfter;
        // link the node before it to the new node
        nodeBefore.next = newNode;

        this.length++;
        return true;
    }

    remove(position) {
        if (position < 0 || position >= this.length) return undefined;
        if (position === 0) return this.shift();
        if (position === this.length - 1) return this.pop();
        // find the node before target
        let nodeBefore = this.get(position - 1);
        // find the target
        let target = nodeBefore.next;
        // find the node after the target
        let nodeAfter = target.next;
        // link the before and after together
        nodeBefore.next = nodeAfter;

        this.length--;
        target.next = null;
        return target;
    }

    reverse() {
        // change the head and tail
        let oldHead = this.head;
        this.head = this.tail;
        this.tail = oldHead;
        // set a pointer (before, after)
        let previous = null;
        let next = null;
        for (let i = 0; i < this.length; i++) {
            next = oldHead.next;
            oldHead.next = previous;
            previous = oldHead;
            oldHead = next;
        }
    }
}

module.exports = SLL;
