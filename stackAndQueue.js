// The stack is a data structure that follows Last In First Out (LIFO) principle. The element that is added at last is accessed at first. This is like stacking your books on top of each other. The book that you put at last comes first.
class stack {
    constructor() {
        this.array = []
    }
    push(ele) {
        // return this.array.push(ele)
        this.array[this.array.length] = ele
        return this.array.length
    }
    pop() {
        // return this.array.pop()
        let newArr = [...this.array]
        this.array = []
        for (let i = 0; i < newArr.length - 1; i++) {
            this.array[i] = newArr[i]
        }
        return newArr[newArr.length - 1]
    }
    peek() {
        return this.array[this.array.length - 1]
    }
    isEmpty() {
        return this.array.length == 0
    }
    size() {
        return this.array.length
    }
    clear() {
        this.array = []
        return this
    }
}

const myStack = new stack()
console.log(myStack)
console.log(myStack.pop())
myStack.push("hi")
myStack.push("firoz")
console.log(myStack)
console.log(myStack.push("shaik"))
console.log(myStack.pop())
console.log(myStack.isEmpty())
console.log(myStack.size())
console.log(myStack.array)
console.log(myStack.clear())

// In the above program, the Stack class is created to implement the stack data structure. The class methods like push(), pop(), peek(), isEmpty(), size(), clear() are implemented.

// An object myStack is created using a new operator and various methods are accessed through the object.

//queue(FIFO)
class queue {
    constructor() {
        this.array = []
    }
    mypush(val) {
        // return tthis.array.push(val)
        this.array[this.array.length] = val
        return this.array.length
    }
    myShift() {
        // return this.array.shift()
        let newArr = [...this.array]
        this.array = []
        for (let i = 0; i < newArr.length - 1; i++) {
            this.array[i] = newArr[i + 1]
        }
        return newArr[0]
    }
    peek() {
        return this.array[0]
    }
    isEmpty() {
        return this.array.length == 0
    }
    size() {
        return this.array.length
    }
    clear() {
        this.array = []
        return this
    }
}
let myQueue = new queue()
myQueue.mypush(1)
myQueue.mypush(2)
myQueue.mypush(3)
myQueue.mypush(4)
console.log(myQueue)
myQueue.myShift()
console.log(myQueue)