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
        let newNode = new Node(value);
        if (!this.root) return this.root = newNode;
        let current = this.root;
        while (true) {
            if (value === current.value) return `${value}already exists!`;
            if (value > current.value) {
                if (current.right) {
                    current = current.right;
                    continue;
                }
                current.right = newNode;
                break;
            }
            else if (value < current.value) {
                if (current.left) {
                    current = current.left;
                    continue;
                }
                current.left = newNode;
                break;
            }
        }
        return this.root;
    }
    find(value) {
        if (!this.root) return undefined;
        let current = this.root;
        while (current) {
            if (value === current.value) return current;
            if (value > current.value) {
                current = current.right;
            }
            else {
                current = current.left;
            }
        }
        return "Value not found!";
    }
    breadthFirstSearch() {
        let queue = [];
        let visited = [];
        let node = this.root;
        queue.push(node);
        while (queue.length !== 0) {
            node = queue.shift();
            visited.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return visited;
    }
}


let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(14);
tree.insert(3);
tree.insert(12);
tree.insert(7);
tree.insert(17);

// console.log(tree.find(12));
// console.log(tree.find(20));
console.log(tree.breadthFirstSearch());