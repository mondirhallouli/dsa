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
            return this.node;
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
        while (node) {
            if (value === node.value) return node;
            if (value > node.value) {
                node = node.right;
            }
            else {
                node = node.left;
            }
        }
        return false;
    }
    breadthFirstSearch() {
        let queue = [];
        let visited = [];
        let node = this.root;
        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            visited.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return visited;
    }
    depthFirstSearch() { }
}

let tree = new BST();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.breadthFirstSearch());