//linked list
class node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
function linkedList(arr) {
    let head = null
    let temp = null
    for (let i = 0; i < arr.length; i++) {
        let newNode = new node(arr[i])
        if (head == null) {
            head = newNode
            temp = newNode
        } else {
            temp.next = newNode
            temp = temp.next
        }
    }
    return head
}
console.log(linkedList([1, 2, 3]))

//double linked list
class node1 {
    constructor(val) {
        this.val = val;
        this.next = null
        this.pre = null
    }
}
class dLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new node1(val);
        if (this.length == 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.pre = this.tail;
            this.tail = newNode;
        }
        this.length++
    }

    pop() {
        if (this.length == 0) return undefined;
        let outData = this.tail;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.tail = this.tail.pre;
            this.tail.next = null
        }
        this.length--
        return outData;
    }

    unshift(val) {
        let newNode = new node(val);
        if (this.length == 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.pre = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++
    }
    shift() {
        if (!this.head) return undefined;
        else if (this.length == 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = this.head.next;
            this.head.pre = null
        }

        this.length--
    }

}
function solution(a, arr) {
    //Write your solution here
    let list = new dLinkedList()

    for (let i = 0; i < a; i++) {
        list.push(arr[i])
    }
    list.unshift(0)
    // list.pop()
    // let st1 = '';
    // let data = list.head;
    // while (data) {
    //     st1 += data.val + ' ';
    //     data = data.next;
    // }
    // let st2 = ''
    // let backData = list.tail;
    // while (backData) {
    //     st2 += backData.val + ' ';
    //     backData = backData.pre;
    // }
    // if (st1.length == 0) return 'No element present'
    // return `${st1}\n${st2}`
    return list
}

console.log(solution(2, [1, 2]))
