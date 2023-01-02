class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
function linkeList(arr) {
    let head = null
    let tail = null
    for (let i = 0; i < arr.length; i++) {
        let curr = new Node(arr[i])
        if (!head) {
            head = curr
            tail = curr
        }
        else {
            tail.next = curr
            tail = tail.next
        }
    }
    return head
}
console.log(linkeList([10, 20, 30]))//Node {
//     val: 10,
//     next: Node { val: 20, next: Node { val: 30, next: null } }
//   }
let LL = linkeList([10, 20, 30])
//Delete head node in singly linked list
function deleteHeadNode(LL) {
    // let head = LL
    let temp = LL
    temp = temp.next
    // head=LL
    LL = temp
    return LL
    //return head
}
console.log(deleteHeadNode(LL))//Node { val: 20, next: Node { val: 30, next: null } }

//Delete last node of singly linked list
function deleteLastNode(LL) {
    // let head = LL
    let temp = LL
    while (temp.next.next) {
        temp = temp.next
    }
    temp.next = null
    return LL
    // return head
}
console.log(deleteLastNode(LL))//Node { val: 10, next: Node { val: 20, next: null } }

//Detect loop in a linked list
//leetcode

//Reverse a linked list
let LL1 = linkeList([1, 2, 3, 4, 5])
function reverseLL(LL1) {
    if (LL1 == null || LL1.next == null) {
        return LL1
    }
    let reversedLL = reverseLL(LL1.next)
    LL1.next.next = LL1
    LL1.next = null
    return reversedLL
}
console.log(reverseLL(LL1))//Node {
//     val: 5,
//     next: Node { val: 4, next: Node { val: 3, next: [Node] } }
//   }

// iterative method
function reverseLLI(LL) {
    let p = null
    let c = LL
    let n = LL.next
    while (c) {
        c.next = p
        p = c
        c = n
        if (n) {
            n = n.next
        }
    }
    return p
}
console.log(reverseLLI(LL))
//T.C:-O(N)
//S.C:-O(N)

class dNode {
    constructor(val) {
        this.prev = null
        this.val = val
        this.next = null
    }
}
function dLinkeList(arr) {
    let head = null
    let tail = null
    for (let i = 0; i < arr.length; i++) {
        let curr = new dNode(arr[i])
        if (!head) {
            head = curr
            tail = curr
        }
        else {
            tail.next = curr
            curr.prev = tail
            tail = tail.next
        }
    }
    return head
}
console.log(dLinkeList([10, 20, 30]))//<ref *1> dNode {
//     prev: null,
//     val: 10,
//     next: <ref *2> dNode {
//       prev: [Circular *1],
//       val: 20,
//       next: dNode { prev: [Circular *2], val: 30, next: null }
//     }
//   }

class LinkedList {
    constructor(val, next) {
        this.val = val
        this.next = (next == undefined || next == null) ? null : next
    }
}

let head = new LinkedList(5)
console.log(head)//LinkedList { val: 5, next: null }

head.next = new LinkedList(3)
head.next.next = new LinkedList(1)

console.log(head)

//Insertion in Linked List

//atStart
let dupHead = new LinkedList(7)
console.log(dupHead)//LinkedList { val: 7, next: null }

// dupHead.next = head
// console.log(dupHead)

//or
dupHead.next = head
head = dupHead
console.log(head)//LinkedList {
//     val: 7,
//     next: LinkedList {
//       val: 5,
//       next: LinkedList { val: 3, next: [LinkedList] }
//     }
//   }

//insertAfter
let pre_node = head.next
console.log(pre_node)

let newNode = new LinkedList(4)
newNode.next = pre_node.next
pre_node.next = newNode
console.log(pre_node)//LinkedList {
//     val: 5,
//     next: LinkedList {
//       val: 4,
//       next: LinkedList { val: 3, next: [LinkedList] }
//     }
//   }
head.next = pre_node
console.log(head)//LinkedList {
//     val: 7,
//     next: LinkedList {
//       val: 5,
//       next: LinkedList { val: 4, next: [LinkedList] }
//     }
//   }


//atEnd
let dup = head
while (dup.next != null) {
    dup = dup.next
}
dup.next = new LinkedList(0)
console.log(dup)

//delete

