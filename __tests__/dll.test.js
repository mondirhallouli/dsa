const DLL = require("../doubly-linked-lists/dll.js");


describe('Doubly linked list add/remove operations', () => {
    let list = new DLL();

    test('push to empty list', () => {
        let a = {
            head: {
                value: "A",
                next: null,
                prev: null
            },
            tail: {
                value: "A",
                next: null,
                prev: null
            },
            length: 1
        };
        list.push("A");
        expect(list).toEqual(a);
    })

    test('push to a list with length of 1', () => {
        let a = {
            value: "A",
            next: {
                value: "B",
                next: null,
            },
            prev: null
        };
        // create a circular reference object
        a.next.prev = a;

        list.push("B");

        expect(list).toEqual({head: a, tail: a.next, length: 2});
    })

    test('push to a list with length of 2+', () => {
        let a = {
            value: "A",
            next: {
                value: "B",
                next: {
                    value: "C",
                    next: null
                },
            },
            prev: null
        };
        // create a circular reference object
        a.next.prev = a;
        a.next.next.prev = a.next;

        list.push("C");

        expect(list).toEqual({head: a, tail: a.next.next, length: 3});
    })

    test('pop node from list with length of 2+', () => {
        let a = {
            value: "A",
            next: {
                value: "B",
                next: null,
            },
            prev: null
        };
        // create a circular reference object
        a.next.prev = a;

        // shorten the list to 2 nodes
        list.pop();
        a.next = null;
        expect(list.pop()).toEqual({value: "B", next: null, prev: a});
        expect(list).toEqual({head: a, tail: a, length: 1});
    })

    test('pop node from list with length of 1', () => {
        expect(list.pop()).toEqual({value: "A", next: null, prev: null});

        expect(list).toEqual({
            head: null,
            tail: null,
            length: 0
        });
    })

    test('unshift node into an empty list', () => {
        list.unshift("A");
        expect(list).toEqual({
            head: {
                value: "A",
                next: null,
                prev: null
            },
            tail: {
                value: "A",
                next: null,
                prev: null
            },
            length: 1
        });
    })

    test('unshift node into a list of length 1', () => {
        let b = {
            value: "B",
            next: {
                value: "A",
                next: null,
            },
            prev: null
        };
        b.next.prev = b;

        list.unshift("B");
        expect(list).toEqual({ head: b, tail: b.next, length: 2});
    })

    test('unshift node into a list of length 2+', () => {
        let c = {
            value: "C",
            prev: null,
            next: {
                value: "B",
                next: {
                    value: "A",
                    next: null,
                }
            }
        };
        c.next.prev = c;
        c.next.next.prev = c.next;

        list.unshift("C");
        expect(list).toEqual({head: c, tail: c.next.next, length: 3});
    })

    test('shift node from a list of length 2+', () => {
        list.shift()
        expect(list.shift()).toEqual({
            value: "B",
            next: {
                value: "A",
                next: null,
                prev: null
            },
            prev: null
        });
        expect(list).toEqual({
            head: {
                value: "A",
                prev: null,
                next: null
            },
            tail: {
                value: "A",
                prev: null,
                next: null
            },
            length: 1
        });
    })

    test('shift node from a list of length 1', () => {
        expect(list.shift()).toEqual({value: "A", next: null, prev: null});
        expect(list).toEqual({
            head: null,
            tail: null,
            length: 0
        });
    })
})

describe('Doubly linked list search operations', () => {
    let list = new DLL();
    list.push("A");
    list.push("B");
    list.push("C");

    let a = {
        value: "A",
        prev: null,
        next: {
            value: "B",
            next: {
                value: "C",
                next: null
            }
        }
    };
    a.next.prev = a;
    a.next.next.prev = a.next;
    
    test('get node in the middle of the list', () => {
        expect(list.get(1)).toEqual(a.next);
    });

    test('get node at the edge of the list', () => {
        expect(list.get(0)).toEqual(a);
        expect(list.get(2)).toEqual(a.next.next);
        expect(list.get(-1)).toBe(undefined);
        expect(list.get(4)).toBe(undefined);
    });

    test('set node value in the list', () => {
        expect(list.set("D", 2)).toBe(true);
        expect(list.set("D", 4)).toBe(false);
        a.next.next.value = "D";
        expect(list).toEqual({ head: a, tail: a.next.next, length: 3});
    });
});

describe('Doubly linked list insertion/removal', () => {
    let list = new DLL();
    list.push("A");
    list.push("B");
    list.push("C");

    let a = {
        value: "A",
        prev: null,
        next: {
            value: "B",
            next: {
                value: "C",
                next: null
            }
        }
    };
    a.next.prev = a;
    a.next.next.prev = a.next;

    test('Inserting node into list', () => {
        expect(list.insert("negative", -1)).toBe(false);
        expect(list.insert("over the length", 4)).toBe(false);
        expect(list.insert("D", 0)).toBe(true);
        expect(list.insert("E", 4)).toBe(true);
        expect(list.insert("F", 2)).toBe(true);

        let d = {
            value: "D",
            prev: null,
            next: {
                value: "A",
                next: {
                    value: "F",
                    next: {
                        value: "B",
                        next: {
                            value: "C",
                            next: {
                                value: "E",
                                next: null
                            }
                        }
                    }
                }
            },
        };

        // create circular reference to imitate a doubly linked list
        let node = d;
        let curr = d.next;
        while (node.next) {
            curr.prev = node;
            curr = curr.next;
            node = node.next;
        }

        // when the loop ends, node is the last one in the list
        let tail = node;
        expect(list).toEqual({
            head: d,
            tail: tail,
            length: 6
        });
    });

    test('Remove node from the list', () => {
        let d = {
            value: "D",
            prev: null,
            next: {
                value: "A",
                next: {
                    value: "F",
                    next: {
                        value: "B",
                        next: {
                            value: "C",
                            next: {
                                value: "E",
                                next: null
                            }
                        }
                    }
                }
            },
        };

        // create circular reference to imitate a doubly linked list
        let node = d;
        let curr = d.next;
        while (node.next) {
            curr.prev = node;
            curr = curr.next;
            node = node.next;
        }

        // out of bounds
        expect(list.remove(-1)).toBe(undefined);
        expect(list.remove(6)).toBe(undefined);

        node.prev.next = null; // imitate pop by removing connection to removed node from the end

        // remove last last item in list
        expect(list.remove(5)).toEqual(node);
        expect(list).toEqual({head: d, tail: node.prev, length: 5});
        
        d.next.prev = null; // cut the connection to removed node in the new head node ("A")

        // remvoe at start of the list
        expect(list.remove(0)).toEqual(d);

        expect(list).toEqual({
            head: d.next,
            tail: node.prev,
            length: 4
        });

        let f = d.next.next;
        d.next.next = d.next.next.next; // cut the connection to removed node ("F")
        d.next.next.prev = d.next; // connect the prev node and next node of the removed node("F")

        // middle of the list
        expect(list.remove(1)).toEqual(f);

        expect(list).toEqual({
            head: d.next,
            tail: node.prev,
            length: 3
        });
    });
});

describe('Reversing a list', () => {
    let list = new DLL();
    list.push("A");
    list.push("B");
    list.push("C");

    let c = {
        value: "C",
        prev: null,
        next: {
            value: "B",
            next: {
                value: "A",
                next: null
            }
        }
    };

    let node = c;
    let curr = c.next;
    while (node.next) {
        curr.prev = node;
        curr = curr.next;
        node = node.next;
    }

    test('Reverse a list', () => {
        list.reverse()
        expect(list).toEqual({
            head: c,
            tail: node,
            length: 3
        });
    });
});
