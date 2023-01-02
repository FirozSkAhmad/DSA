let arr = [2, 5, 8, 7]
arr.slice(1)
console.log(arr)//[ 2, 5, 8, 7 ]
console.log(arr.slice(1))//[ 5, 8, 7 ]
arr = arr.slice(1)
console.log(arr)//[ 5, 8, 7 ]


//return the sum of n numbers using recursion
function sum(n) {
    if (n == 1) return 1
    return n + sum(n - 1)
}
console.log(sum(5))
//5+sum(4)
// +4+sum(3)
//   +3+sum(2)
//     +2+sum(1)
//       +1


//Calculate factorial of n
function factorial(n) {
    if (n == 1) return 1
    return n * factorial(n - 1)
}
console.log(factorial(5))

//Find the nth Fibonacci number
function Fibonacci(n) {
    if (n <= 2) return 1
    return Fibonacci(n - 1) + Fibonacci(n - 2)
}
console.log(Fibonacci(5))
function Fibonacci1(n, a, b) {
    if (n == 0) {
        return
    }
    let c = a + b
    console.log(c)
    Fibonacci1(n - 1, b, c)
    return ""
}
console.log(Fibonacci1(5, 0, 1))


//Calculate the sum of elements of an array of numbers
function sumArr(arr) {
    if (arr.length == 1) {
        return arr[0]
    }
    return arr[0] + sumArr(arr.slice(1))
}
console.log(sumArr([1, 2, 3, 4, 5]))

//multiple all the elements of an array of numbers
function mulArr(arr) {
    if (arr.length == 0) return 1
    return arr[0] * mulArr(arr.slice(1))
}
console.log(mulArr([1, 2, 3, 4, 5]))

// Calculate n^m - the value of n to the m power
function pow(n, m) {//O(N)
    if (m == 1) return n
    return n * pow(n, m - 1)
}
console.log(pow(2, 4))
function pow1(n, m) {//S.C=O(logN)
    if (m == 1) return n
    if (n == 0) return 0
    if (m % 2 == 0) {
        return pow1(n, m / 2) * pow1(n, m / 2)
    }
    else {
        return pow1(n, Math.floor(m / 2)) * pow1(n, Math.floor(m / 2)) * n
    }
}
console.log(pow1(2, 4))
console.log(pow1(2, 5))

//write a program to reverse a string
function reverseStr(str) {
    if (str.length == 1) {
        return str[0]
    }
    return reverseStr(str.slice(1)) + str[0]
}
console.log(reverseStr("hello"))
//   reverseStr("ello") +h
//   reverseStr("llo")+e
//  reverseStr("lo")+l
// reverseStr("o")+l
//        o

//write a program to reverse a array
function reverseArr(arr) {
    if (arr.length == 0) return []
    return reverseArr(arr.slice(1)).concat(arr[0])
}
console.log(reverseArr([1, 2, 3]))

// Iterative solution for sort
function sort(arr) {
    let shouldSort = true
    let length = arr.length
    while (shouldSort) {
        shouldSort = false
        // length--(V)
        for (let i = 0; i < length; i++) {
            let a = arr[i]
            if (a > arr[i + 1]) {//for a.o and for descending order use if(a<arr[i+1])
                arr[i] = arr[i + 1]
                arr[i + 1] = a
                shouldSort = true//(X)
            }
            // shouldSort = true//(V)
        }
    }
    return arr
}
console.log(sort([23, 1000, 1, -1, 8, 3]))//[ -1, 1, 3, 8, 23, 1000 ]

// Recursive solution for sort
function Sort(ar, to) {
    var shouldSort = false;
    var length = to - 1 || ar.length - 1;
    for (var i = 0; i < length; i++) {
        var a = ar[i];
        if (a > ar[i + 1]) {
            ar[i] = ar[i + 1];
            ar[i + 1] = a;
            shouldSort = true;
        }
    }
    if (shouldSort) {
        Sort(ar, length - 1);
        return ar
    }
}
let ar = [23, 1000, 1, -1, 8, 3]
console.log(Sort(ar))


//check if string is a palindrome or not
function checkPalindrom(str) {
    if (str.length <= 1) return true
    return (str[0] == str.slice(-1) && checkPalindrom(str.slice(1, -1)))
}

console.log(checkPalindrom("racecar"))

let Str = "racecar"
console.log(Str[0])//r
console.log(Str.slice(1))//acecar
console.log(Str.slice(-1))//r
console.log(Str.slice(0, 2))//ra
console.log(Str.slice(1, 2))//a
//if start,end is given then it gives subString from index start to end
//if only start is given it gives only right side sub string

function checkPalindrom1(str) {
    if (str.length <= 1) return true
    if (str[0] == str.slice(-1)) return checkPalindrom(str.slice(1, -1))
    else return false
}
console.log(checkPalindrom1("racecar"))

//["hi","hello"]===>[ 'Hi', 'Hello' ]
function change(arr) {
    if (arr.length == 0) return []
    arr[0] = arr[0][0].toUpperCase() + arr[0].slice(1)
    return [arr[0]].concat(change(arr.slice(1)))
}
console.log(change(["hi", "hello"]))

//Linked List
class linkedList {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
let headNode = new linkedList(10)
headNode.next = new linkedList(20)
headNode.next.next = new linkedList(30)

console.log(headNode)

//Reverse Linked List
function reverseLinkedList(headNode) {
    if (headNode == null || headNode.next == null) {
        return headNode
    }
    let reverselist = reverseLinkedList(headNode.next)
    headNode.next.next = headNode
    headNode.next = null
    return reverselist
}

console.log("reverseLinkedList:")
console.log(reverseLinkedList(headNode))



