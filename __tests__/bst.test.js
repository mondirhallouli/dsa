const BST = require('../binary-search-trees/bst.js');

test("Insertion in binary search tree", () => {
    let tree = new BST();
    tree.insert(10);
    tree.insert(5);
    tree.insert(14);
    tree.insert(7);
    tree.insert(3);
    tree.insert(12);
    tree.insert(17);

    expect(tree).toEqual({
        root: {
            value: 10,
            left: {
                value: 5,
                left: {
                    value: 3,
                    left: null,
                    right: null
                },
                right: {
                    value: 7,
                    left: null,
                    right: null
                }
            },
            right: {
                value: 14,
                left: {
                    value: 12,
                    left: null,
                    right: null
                },
                right: {
                    value: 17,
                    left: null,
                    right: null
                }
            }
        }
    });
});

test("Seach in binary search tree", () => {
    let tree = new BST();
    tree.insert(10);
    tree.insert(5);
    tree.insert(14);
    tree.insert(7);
    tree.insert(3);
    tree.insert(12);
    tree.insert(17);

    expect(tree.find(1)).toBe(false);
    expect(tree.find(9)).toBe(false);
    expect(tree.find(20)).toBe(false);

    expect(tree.find(7)).toEqual({value: 7, left: null, right: null});
    expect(tree.find(14)).toEqual({
        value: 14,
        left: {
            value: 12,
            left: null,
            right: null
        },
        right: {
            value: 17,
            left: null,
            right: null
        }
    });
});
