//2Sum
function twoSumPair(arr, target) {
    arr.sort((a, b) => a - b)
    let start = 0
    let end = arr.length - 1
    let out = []
    while (start < end) {
        let sum = arr[start] + arr[end]
        if (sum === target) {
            out.push([arr[start], arr[end]])
        }
        if (sum > target) end--
        else start++
    }
    return out
}
console.log(twoSumPair([1, -2, 1, 0, 5], 0))//[]

function twoSumClosest(arr, target) {
    arr.sort((a, b) => a - b)
    let start = 0
    let end = arr.length - 1
    let closest = Infinity
    let out = []
    while (start < end) {
        let sum = arr[start] + arr[end]
        let curDiff = Math.abs(sum - target)
        if (curDiff < closest) {
            closest = curDiff
            out = [arr[start], arr[end]]
        }
        if (sum > target) end--
        else start++
    }
    return out
}
console.log(twoSumClosest([10, 22, 28, 29, 30, 40], 54))

//3Sum
function threeSumPair(arr, target) {
    arr.sort((a, b) => a - b)
    let out = []
    for (let i = 0; i < arr.length - 2; i++) {
        let start = i + 1
        let end = arr.length - 1
        while (start < end) {
            let sum = arr[i] + arr[start] + arr[end]
            if (sum === target) {
                out.push([arr[i], arr[start], arr[end]])
            }
            if (sum > target) end--
            else start++
        }
    }
    return out
}
console.log(threeSumPair([-1, 0, 1, 2, -1, -4], 0))

function threeSumPairWithOutRepeating(arr, target) {
    arr.sort((a, b) => a - b)
    let out = []
    for (let i = 0; i < arr.length - 2; i++) {
        let start = i + 1
        let end = arr.length - 1
        if (arr[i] === arr[i - 1]) {
            continue
        }
        while (start < end) {
            let sum = arr[i] + arr[start] + arr[end]
            if (sum === target) {
                out.push([arr[i], arr[start], arr[end]])
            }
            if (sum > target) {
                end--
                while (arr[end] == arr[end + 1]) end--
            }
            else {
                start++
                while (arr[start] == arr[start - 1]) start++
            }
        }
    }
    return out
}
console.log(threeSumPairWithOutRepeating([-1, 0, 1, 2, -1, -4], 0))

function threeSumPairClosest(arr, target) {
    arr.sort((a, b) => a - b)
    let closest = Infinity
    let outSum = 0
    for (let i = 0; i < arr.length - 2; i++) {
        let start = i + 1
        let end = arr.length - 1
        while (start < end) {
            let sum = arr[i] + arr[start] + arr[end]
            let curdiff = Math.abs(sum - target)
            if (curdiff < closest) {
                closest = curdiff
                outSum = sum
            }
            if (sum > target) end--
            else start++
        }
    }
    return outSum
}
console.log(threeSumPairClosest([-1, 2, 1, -4], 1))

//4Sum
function fourSumPair(arr, target) {
    arr = arr.sort((a, b) => a - b)
    let out = []
    for (let i = 0; i < arr.length - 3; i++) {
        if (arr[i] == arr[i - 1]) {
            continue
        }
        for (let j = i + 1; j < arr.length - 2; j++) {
            if (arr[j] == arr[j - 1] && j - 1 != i) {
                continue
            }
            let start = j + 1
            let end = arr.length - 1
            while (start < end) {
                let sum = arr[i] + arr[j] + arr[start] + arr[end]
                if (sum == target) {
                    out.push([arr[i], arr[j], arr[start], arr[end]])
                }
                if (sum > target) {
                    end--
                    while (arr[end] == arr[end + 1]) end--
                }
                else {
                    start++
                    while (arr[start] == arr[start - 1]) start++
                }
            }
        }
    }
    return out
}
console.log(fourSumPair([-2, -1, -1, 1, 1, 2, 2], 0))//[ [ -2, -1, 1, 2 ], [ -1, -1, 1, 1 ] ]
console.log(fourSumPair([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 8))

//sort 0's and 1's
//3methods
function sortArray(arr) {
    let low = 0
    let high = arr.length - 1
    while (low <= high) {
        while (arr[low] == 0 && low <= high) {
            low++
        }
        while (arr[high] == 1 && low <= high) {
            high--
        }
        if (low <= high) {
            arr[low] = arr[low] + arr[high]
            arr[high] = arr[low] - arr[high]
            arr[low] = arr[low] - arr[high]
        }
    }
    return arr
}
console.log(sortArray([0, 0, 1, 1, 0, 1, 0, 1]))//[ 0, 0, 0, 0,, 1, 1, 1,1]

//sort 0's, 1's and 2's
//3methods
//3=>dutch national flag algorithm
function sort012(arr) {
    let low = 0
    let mid = 0
    let high = arr.length - 1
    while (mid <= high) {
        if (arr[mid] == 0) {
            arr[low] = arr[low] + arr[mid]
            arr[mid] = arr[low] - arr[mid]
            arr[low] = arr[low] - arr[mid]
            low++
            mid++
        }
        if (arr[mid] == 1 && mid <= high) {
            mid++
        }
        if (arr[mid] == 2 && mid <= high) {
            arr[high] = arr[high] + arr[mid]
            arr[mid] = arr[high] - arr[mid]
            arr[high] = arr[high] - arr[mid]
            high--
        }
    }
    return arr
}
console.log(sort012([1, 0, 2, 0, 1, 2, 0, 1, 1, 2, 0]))//[0, 0, 0, 0,1, 1, 1, 1]

//merge two sorted array
var merge = function (nums1, m, nums2, n) {
    let p = m - 1
    let q = n - 1
    let r = m + n - 1
    while (q >= 0) {
        if (p >= 0 && nums1[p] > nums2[q]) {
            nums1[r] = nums1[p]
            r--
            p--
        }
        else {
            nums1[r] = nums2[q]
            r--
            q--
        }
    }
    return nums1
};
console.log(merge([-1, -1, 0, 0, 0, 0], 4, [-1, 0], 2));//[ -1, -1, -1, 0, 0, 0 ]
console.log(merge([2, 0], 1, [1], 1));//[ 1, 2 ]
//merge two sorted array by Divide and Conquer
function ms(nums1, nums2) {
    let arr = [...nums1, ...nums2]
    let i = 0
    let j = 0
    let x = 0
    let newArr = new Array(nums1.length + nums2.length)
    while (i <= nums1.length - 1 && j <= nums2.length - 1) {
        if (nums1[i] <= nums2[j]) {
            newArr[x] = nums1[i]
            i++
        }
        else {
            newArr[x] = nums2[j]
            j++
        }
        x++
    }
    while (i <= nums1.length - 1) {
        newArr[x] = nums1[i]
        i++
        x++
    }
    while (j <= nums2.length - 1) {
        newArr[x] = nums2[j]
        j++
        x++
    }
    for (let p = 0; p < newArr.length; p++) {
        arr[p] = newArr[p]
    }
    return arr
}
console.log(ms([-1, -1, 0, 0], [-1, 0]));//[ -1, -1, -1, 0, 0, 0 ]



