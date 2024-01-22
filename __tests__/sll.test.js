const SLL = require("../singly-linked-list/sll.js");

describe('linked list add/remove operations', () => {
    let list = new SLL();

    test('push to empty list', () => {
        expect(list.push("A")).toEqual({
            head: {
                value: "A",
                next: null
            },
            tail: {
                value: "A",
                next: null
            },
            length: 1
        });
    })

    test('push to a list with length of 1', () => {
        expect(list.push("B")).toEqual({
            head: {
                value: "A",
                next: {
                    value: "B",
                    next: null
                }
            },
            tail: {
                value: "B",
                next: null
            },
            length: 2
        });
    })

    test('push to a list with length of 2+', () => {
        expect(list.push("C")).toEqual({
            head: {
                value: "A",
                next: {
                    value: "B",
                    next: {
                        value: "C",
                        next: null
                    }
                }
            },
            tail: {
                value: "C",
                next: null
            },
            length: 3
        });
    })

    test('pop node from list with length of 2+', () => {
        list.pop()
        expect(list.pop()).toEqual({value: "B", next: null});

        expect(list).toEqual({
            head: {
                value: "A",
                next: null
            },
            tail: {
                value: "A",
                next: null
            },
            length: 1
        });
    })

    test('pop node from list with length of 1', () => {
        expect(list.pop()).toEqual({value: "A", next: null});

        expect(list).toEqual({
            head: null,
            tail: null,
            length: 0
        });
    })

    test('unshift node into an empty list', () => {
        expect(list.unshift("A")).toEqual({
            head: {
                value: "A",
                next: null,
            },
            tail: {
                value: "A",
                next: null
            },
            length: 1
        });
    })

    test('unshift node into a list of length 1', () => {
        expect(list.unshift("B")).toEqual({
            head: {
                value: "B",
                next: {
                    value: "A",
                    next: null,
                },
            },
            tail: {
                value: "A",
                next: null
            },
            length: 2
        });
    })

    test('unshift node into a list of length 2+', () => {
        expect(list.unshift("C")).toEqual({
            head: {
                value: "C",
                next: {
                    value: "B",
                    next: {
                        value: "A",
                        next: null,
                    },
                },
            },
            tail: {
                value: "A",
                next: null
            },
            length: 3
        });
    })

    test('shift node from a list of length 2+', () => {
        list.shift()
        expect(list.shift()).toEqual({value: "B", next: null});
        expect(list).toEqual({
            head: {
                value: "A",
                next: null,
            },
            tail: {
                value: "A",
                next: null
            },
            length: 1
        });
    })

    test('shift node from a list of length 1', () => {
        expect(list.shift()).toEqual({value: "A", next: null});
        expect(list).toEqual({
            head: null,
            tail: null,
            length: 0
        });
    })
})

describe('Singly linked list search operations', () => {
    let list = new SLL();
    list.push("A");
    list.push("B");
    list.push("C");
    
    test('get node in the middle of the list', () => {
        expect(list.get(1)).toEqual({
            value: "B",
            next: {
                value: "C",
                next: null
            }
        });
    });

    test('get node at the edge of the list', () => {
        expect(list.get(0)).toEqual({
            value: "A",
            next: {
                value: "B",
                next: {
                    value: "C",
                    next: null
                }
            }
        });
        expect(list.get(2)).toEqual({
            value: "C",
            next: null
        });
        expect(list.get(-1)).toBe(undefined);
        expect(list.get(4)).toBe(undefined);
    });

    test('set node value in the list', () => {
        expect(list.set("D", 2)).toBe(true);
        expect(list.set("D", 4)).toBe(false);
        expect(list).toEqual({
            head: {
                value: "A",
                next: {
                    value: "B",
                    next: {
                        value: "D",
                        next: null
                    }
                }
            },
            tail: {
                value: "D",
                next: null
            },
            length: 3
        });
    });
});

describe('Singly linked list insertion/removal', () => {
    let list = new SLL();
    list.push("A");
    list.push("B");
    list.push("C");

    test('Inserting node into list', () => {
        expect(list.insert("negative", -1)).toBe(false);
        expect(list.insert("over the length", 4)).toBe(false);
        expect(list.insert("D", 0)).toBe(true);
        expect(list.insert("E", 4)).toBe(true);
        expect(list.insert("F", 2)).toBe(true);

        expect(list).toEqual({
            head: {
                value: "D",
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
                }
            },
            tail: {
                value: "E",
                next: null
            },
            length: 6
        });
    });

    test('Remove node from the list', () => {
        // out of bounds
        expect(list.remove(-1)).toBe(undefined);
        expect(list.remove(6)).toBe(undefined);
        // last item in list
        expect(list.remove(5)).toEqual({
            value: "E",
            next: null
        });

        expect(list).toEqual({
            head: {
                value: "D",
                next: {
                    value: "A",
                    next: {
                        value: "F",
                        next: {
                            value: "B",
                            next: {
                                value: "C",
                                next: null
                            }
                        }
                    }
                }
            },
            tail: {
                value: "C",
                next: null
            },
            length: 5
        });

        // start of the list
        expect(list.remove(0)).toEqual({
            value: "D",
            next: null
        });

        expect(list).toEqual({
            head: {
                value: "A",
                next: {
                    value: "F",
                    next: {
                        value: "B",
                        next: {
                            value: "C",
                            next: null
                        }
                    }
                }
            },
            tail: {
                value: "C",
                next: null
            },
            length: 4
        });

        // middle of the list
        expect(list.remove(1)).toEqual({
            value: "F",
            next: null
        });

        expect(list).toEqual({
            head: {
                value: "A",
                next: {
                    value: "B",
                    next: {
                        value: "C",
                        next: null
                    }
                }
            },
            tail: {
                value: "C",
                next: null
            },
            length: 3
        });
    });
});

describe('Reversing a list', () => {
    let list = new SLL();
    list.push("A");
    list.push("B");
    list.push("C");

    test('Reverse a list', () => {
        list.reverse()
        expect(list).toEqual({
            head: {
                value: "C",
                next: {
                    value: "B",
                    next: {
                        value: "A",
                        next: null
                    }
                }
            },
            tail: {
                value: "A",
                next: null
            },
            length: 3
        });
    });
});
