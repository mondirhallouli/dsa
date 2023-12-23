class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class SinglyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0
    
    def print_list(self):
        node = self.head
        nodes = []
        if node is None: return print("This list has no nodes!")
        while node != None:
            nodes.append(node.value)
            node = node.next
        print(nodes)
    
    def push(self, value):
        newNode = Node(value)
        if self.length == 0:
            self.head = newNode
            self.tail = newNode
        else:
            self.tail.next = newNode
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
            newTail = self.head
            popped = newTail.next
            while popped.next:
                newTail = newTail.next
                popped = newTail.next
            self.tail = newTail
            self.tail.next = None
        self.length -= 1
        return popped
    
    def unshift(self, value):
        newNode = Node(value)
        if self.head == None:
            self.head = newNode
            self.tail = newNode
        else:
            newNode.next = self.head
            self.head = newNode
        self.length += 1
        return self
    
    def shift(self):
        shifted = None
        if self.head == None:
            return shifted
        elif self.length == 1:
            shifted = self.head
            self.head = None
            self.tail = None
        else:
            shifted = self.head
            self.head = shifted.next
            shifted.next = None
        self.length -= 1
        return shifted
    
    def get(self, position):
        if position < 0 or position >= self.length:
            return None
        i = 0
        target = self.head
        while i != position:
            target = target.next
            i += 1
        return target

    def set(self, value, position):
        target = self.get(position)
        if target != None:
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
        prev = self.get(position - 1)
        next = prev.next
        prev.next = newNode
        newNode.next = next
        self.length += 1
        return self
    
    def remove(self, position):
        if position < 0 | position >= self.length:
            return None
        elif position == self.length - 1:
            return self.pop()
        elif position == 0:
            return self.shift()
        prev = self.get(position - 1)
        target = prev.next
        next = target.next
        prev.next = next
        target.next = None
        self.length -= 1
        return target
    
    def reverse(self):
        node = self.head
        self.head = self.tail
        self.tail = node
        prev = None
        next = None
        while node:
            next = node.next
            node.next = prev
            prev = node
            node = next
        return self


my_list = SinglyLinkedList()
my_list.push("A")
my_list.push("B")
my_list.push("C")
my_list.push("D")
my_list.push("E")
# # my_list.pop()
# my_list.unshift("mondir")
# my_list.shift()
# my_list.set("mondir", 4)

# print(my_list.set("ahmed",3))
# my_list.print_list()
# my_list.insert("yasser", 0)
my_list.reverse()
my_list.print_list()
# print(my_list.get(4))
# print(my_list.length, my_list.head.value, my_list.tail.value)