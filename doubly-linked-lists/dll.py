class Node:
    def __init__(self, value):
        self.value = value
        self.prev  = None
        self.next  = None

class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

    def show_vals(self):
        vals = []
        curr = self.head
        while curr:
            vals.append(curr.value)
            curr = curr.next
        return vals
    
    def push(self, value):
        newNode = Node(value)
        if self.length == 0:
            self.head = newNode
            self.tail = newNode
        else:
            self.tail.next = newNode
            newNode.prev = self.tail
            self.tail = newNode
        self.length += 1
        return self
    
    def pop(self):
        popped = None
        if self.length == 0:
            return popped
        elif self.length == 1:
            popped = self.tail
            self.head = None
            self.tail = None
        else:
            popped = self.tail
            self.tail = popped.prev
            self.tail.next = None
        self.length -= 1
        return self
    
    def unshift(self, value):
        newNode = Node(value)
        if self.length == 0:
            self.head = newNode
            self.tail = newNode
        else:
            newNode.next = self.head
            self.head.prev = newNode
            self.head = newNode
        self.length += 1
        return self
    
    def shift(self):
        shifted = None
        if self.length == 0:
            return shifted
        elif self.length == 1:
            shifted = self.head
            self.head = None
            self.tail = None
        else:
            shifted = self.head
            self.head = shifted.next
            self.head.prev = None
            shifted.next = None
        self.length -= 1
        return shifted
    
    def get(self, position):
        if position < 0 | position >= self.length:
            return None
        elif position >= self.length / 2:
            i = self.length - 1
            target = self.tail
            while i != position:
                target = target.prev
                i -= 1
        else:
            i = 0
            target = self.head
            while i != position:
                target = target.next
                i += 1
        return target
    
    def set(self,value, position):
        target = self.get(position)
        if target:
            target.value = value
            return True
        return False
    
    def insert(self, value, position):
        if position < 0 | position > self.length:
            return None
        elif position == self.length:
            return self.push(value)
        elif position == 0:
            return self.unshift(value)
        newNode = Node(value)
        next= self.get(position)
        prev= next.prev
        newNode.prev = prev
        newNode.next = next
        prev.next = newNode
        next.prev = newNode
        self.length += 1
        return self
    
    def reverse(self):
        node = self.head
        self.head = self.tail
        self.tail = node
        prev = None
        next = None
        while node:
            next = node.next
            node.next = prev
            node.prev = next
            prev = node
            node = next
        return self


my_ll = DoublyLinkedList()
my_ll.push("A")
my_ll.push("B")
my_ll.push("C")
my_ll.reverse()

print(my_ll.show_vals())