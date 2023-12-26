/*

Binary search tree rules:
    - each nodes has 2 children or less
    - the child node on the left is less than the parent/ancestor value
    - the child node on the right is greater than the parent/ancestor value
*/

class Node {
    constructor(value) {
        this.value = value
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let node = this.root;
        while (true) {
            if (value > node.value) {
                if (node.right) {
                    node = node.right;
                    continue;
                }
                node.right = newNode;
                break;
            }
            else if (value < node.value) {
                if (node.left) {
                    node = node.left;
                    continue;
                }
                node.left = newNode;
                break;
            }
        }
        return this;
    }
    find(value) {
        if (!this.root) return false;
        let node = this.root;
        while (true) {
            if (value == node.value) return node;
            if (value > node.value) {
                if (node.right) {
                    node = node.right;
                    continue;
                }
                break;
            }
            else if (value < node.value) {
                if (node.left) {
                    node = node.left;
                    continue;
                }
                break;
            }
        }
        return false;
    }
}