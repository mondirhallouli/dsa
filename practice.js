class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        let node = new Node(value);
        if (!this.root) return this.root = node;
        let current = this.root;
        while (current) {
            if (value > current.value) {
                if (!current.right) {
                    current.right = node;
                    break;
                }
                current = current.right;
            }
            if (value < current.value) {
                if (!current.left) {
                    current.left = node;
                    break;
                }
                current = current.left;
            }
        }
        return this.root;
    }
    find(value) {
        if (!this.root) return "Tree is empty!";
        let current = this.root;
        while (current) {
            if (value == current.value) return true;
            if (value > current.value) {
                current = current.right;
                continue;
            }
            if (value < current.value) {
                current = current.left;
            }
        }
        return false;
    }
}

let tree = new BinarySearchTree();

tree.insert(10);
tree.insert(3);
tree.insert(17);
tree.insert(1);
tree.insert(7);
tree.insert(12);
tree.insert(19);

// console.dir(tree, {depth: null});
console.log(tree.find(7));
console.log(tree.find(20));
