class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
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
            newNode.prev = this.tail;
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
            this.tail = popped.prev;
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
            this.head.prev = newNode;
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
            this.head.prev = null;
        }
        this.length--;
        return shifted;
    }

    get(position) {
        let target, i;
        if (position < 0 || position >= this.length) return undefined;
        if (position > (this.length / 2)) {
            target = this.tail;
            i = this.length - 1;
            while (i != position) {
                target = target.prev;
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

    set(value, position) {
        let target = this.get(position);
        if (target) {
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
        let node = new Node(value);
        let next = this.get(position);
        let prev = next.prev;
        node.next = next;
        node.prev = prev;
        next.prev = node;
        prev.next = node;
        this.length++;
        return true;
    }

    remove(position) {
        if (position < 0 || position > this.length - 1) return undefined;
        if (position === 0) return this.shift();
        if (position === this.length - 1) return this.pop();
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

module.exports = DLL
