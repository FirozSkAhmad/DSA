//1.swap 2 numbers (a and b) with out a 3rd temp variable 
let a = 3
let b = 2

//solution
a = a + b
b = a - b
a = a - b
console.log(a, b)//2 3

//2.swap 2 strings (a and b) with out a 3rd temp variable 
let str1 = "Good"
let str2 = "One"

//solution
str1 = str1 + str2
str2 = str1.slice(0, str1.length - str2.length)
str1 = str1.slice(str1.length - str2.length + 1)
console.log(str1, str2)//One Good

//3.Reverse array without using extra array
let arr = [1, 2, 3, 4]
let mid = 0 + Math.floor((arr.length - 1 - 0) / 2)
let i = 0
while (i <= mid) {
    arr[i] = arr[i] + arr[arr.length - (i + 1)]
    arr[arr.length - (i + 1)] = arr[i] - arr[arr.length - (i + 1)]
    arr[i] = arr[i] - arr[arr.length - (i + 1)]
    i++
}
console.log(arr)//[ 4, 3, 2, 1 ]
//===============OR================//
function reverseArray(arr) {
    let p = 0
    let q = arr.length - 1
    while (p <= q) {
        arr[p] = arr[p] + arr[q]
        arr[q] = arr[p] - arr[q]
        arr[p] = arr[p] - arr[q]
        p++
        q--
    }
    return arr
}
console.log(reverseArray([1, 2, 3, 4]))//[ 4, 3, 2, 1 ]

//4.write JS programe to cyclically rotate an array by taking n number of last elements
function rotateArray(arr, n) {
    arr = reverseArray(arr)
    arr = reverseArray(arr.slice(0, n)).concat(reverseArray(arr.slice(n, arr.length)))
    return arr
}
console.log(rotateArray([12, 3, 6, 2, 9, 11], 2))//[ 9, 11, 12, 3, 6, 2 ]

//5.Find the maximum sum of any two elements in an array
function findEles(arr) {
    let largest = -Infinity
    let sLargest = -Infinity
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            sLargest = largest
            largest = arr[i]
        }
        else {
            if (arr[i] > sLargest) {
                sLargest = arr[i]
            }
        }
    }
    return [largest, sLargest]
}
console.log(findEles([12, 4, 67, 2, 34]))//[ 67, 34 ]

//6.capitalise the first letter in each element in the array
function capitaliseFl(arr) {
    if (arr.length == 0) return []
    arr[0] = arr[0][0].toUpperCase() + arr[0].slice(1)
    return [arr[0]].concat(capitaliseFl(arr.slice(1)))
}
console.log(capitaliseFl(['abc', 'pqr', 'xyz']))//[ 'Abc', 'Pqr', 'Xyz' ]

//7.reverse each word in a string
function rev(str) {
    if (str.length <= 1) return str
    return rev(str.slice(1)) + str[0]
}

function revEw(str) {
    let arr = str.split(" ")
    function sRev(arr) {
        if (arr.length == 0) return []
        arr[0] = rev(arr[0])
        return [arr[0]].concat(sRev(arr.slice(1)))
    }
    return sRev(arr).join(" ")
}
console.log(revEw('hi to all'))//ih ot lla

//8.return repeated elements in array
function repEle(arr) {
    let map = new Map()
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1)
        }
        else { map.set(arr[i], 1) }
    }
    let keys = [...map.keys()]
    let out = keys.filter(x => map.get(x) > 1)
    return out
}
console.log(repEle([1, 3, 2, 2, 3, 23]))//[ 3, 2 ]

//9.filter out duplicate elements in give unique elements in arr

function unique(arr) {
    let map = new Map()
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1)
        } else {
            map.set(arr[i], 1)
        }
    }
    let keys = [...map.keys()]
    let out = keys.filter(x => map.get(x) == 1)
    return out
}
console.log(unique([1, 1, 2, 22, 3, 5, 11, 2]))//[ 22, 3, 5, 11 ]

//10.find the unique pairs of elements(inside an array) whose sum is equal to a target k
function uniquePairs(arr, tar) {
    let map = new Map()
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1)
        } else {
            map.set(arr[i], 1)
        }
    }
    let keys = [...map.keys()]
    let map1 = new Map()
    for (let i = 0; i < keys.length; i++) {
        if (map.has(tar - keys[i])) {
            map1.set(keys[i], tar - keys[i])
            map.delete(keys[i])
        }
    }
    return [...map1.entries()]
}
console.log(uniquePairs([7, 2, 4, 6, 9, 11, 34, 3, 2, 1], 5))//[ [ 2, 3 ], [ 4, 1 ] ]

//11.check whether the input is an integer or not.
function checkInp(value) {
    return /^-?[0-9]+$/.test(value)
}
console.log(checkInp(123.4))//false
console.log(checkInp(123))//true
console.log(checkInp(-125))//true
console.log(checkInp("abc"))//false

//12.Take a number and if number is multiple of 3 print "Foo"
//if number is multiple of 5 print "Bar"
//and if numbers are multiple of both 5 and 7 print "FooBar"
//if not a multiple of either print nothing
function fooBar(value) {
    if (value % 3 == 0 && value % 5 == 0) return "FooBar"
    else if (value % 3 == 0) return "Foo"
    else if (value % 5 == 0) return "Bar"
    else return ""
}
console.log(fooBar(6))//"Foo"
console.log(fooBar(10))//"Bar"
console.log(fooBar(30))//"FooBar"
console.log(fooBar(13))//""

//13.Divide and Conquer
function conquer(arr, s, mid, e) {
    let i = s
    let j = mid + 1
    let x = 0
    let newArr = new Array(e - s + 1)
    while (i <= mid && j <= e) {
        if (arr[i] <= arr[j]) {
            newArr[x] = arr[i]
            i++
        }
        else {
            newArr[x] = arr[j]
            j++
        }
        x++
    }
    while (i <= mid) {
        newArr[x] = arr[i]
        i++
        x++
    }
    while (j <= e) {
        newArr[x] = arr[j]
        j++
        x++
    }
    for (let p = 0, q = s; p < newArr.length; p++, q++) {
        arr[q] = newArr[p]
    }
}
function divide(arr, s, e) {
    if (s >= e) {
        return
    }
    let mid = s + Math.floor((e - s) / 2)
    divide(arr, s, mid)
    divide(arr, mid + 1, e)
    conquer(arr, s, mid, e)
    return arr
}
console.log(divide([5, 6, 8, 5, 9, 9, 6, 4, 7, 4, 15], 0, 10))

//14.bubble sort algorithm
function bubbleSort(arr) {
    let shouldSort = true
    let length = arr.length
    while (shouldSort) {
        shouldSort = false
        length--
        for (let i = 0; i < length; i++) {
            if (arr[i] >= arr[i + 1]) {
                arr[i] = arr[i] + arr[i + 1]
                arr[i + 1] = arr[i] - arr[i + 1]
                arr[i] = arr[i] - arr[i + 1]
            }
            shouldSort = true
        }
    }
    return arr
}
console.log(bubbleSort([5, 36, 14, 23, 56, 1]))//[ 1, 5, 14, 23, 36, 56 ]

//15.Given number exists in sorted array or not