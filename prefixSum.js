//No of Subarray Sum Equals K
var subarraySum = function (nums, k) {//O(N)
    let map = new Map()
    let sum = 0
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        if (sum == k) count++
        if (map.has(sum - k)) count = map.get(sum - k) + count
        if (map.has(sum)) {
            map.set(sum, map.get(sum) + 1)
        }
        else { map.set(sum, 1) }
    }
    return count
}
console.log(subarraySum([1, 1, 1], 2))//2
console.log(subarraySum([4, 5, 1, 3, 2, 3, 4], 9))//4
console.log(subarraySum([1], 0))//0

//larget Subarray whose sum is equals to k
function lSubArr(arr, k) {
    let map = new Map()
    let sum = 0
    let length = 0
    let subArr = []
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        if (sum == k && i + 1 > length) {
            length = i + 1
            subArr = arr.slice(0, i + 1)
        }
        if (map.has(sum - k)) {
            if (i - map.get(sum - k) > length) {
                length = i - map.get(sum - k)
                subArr = arr.slice(map.get(sum - k) + 1, i + 1)
            }
            continue
        }
        map.set(sum, i)
    }
    console.log(subArr)//[ 1, 3, 2, 3 ]
    return length
}
console.log(lSubArr([4, 5, 1, 3, 2, 3, 4], 9))//4

//Given an array having both positive and negative integers. The task is to compute the length of the largest subarray with sum 0.
function maxLen(arr, n) {
    //code here
    let map = new Map()
    let length = 0
    let sum = 0
    for (let i = 0; i < n; i++) {
        sum += arr[i]
        if (sum == 0 && i + 1 > length) {
            length = i + 1
        }
        if (map.has(sum)) {
            if (i - map.get(sum) > length) {
                length = i - map.get(sum)
            }
            continue
        }
        map.set(sum, i)
    }
    return length
}
console.log(maxLen([15, -2, 2, -8, 1, 7, 10, 23], 8))//5

//Contiguous Array
function findMaxLength(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            nums[i] = -1
        }
    }
    let map = new Map()
    let sum = 0
    let length = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        if (sum == 0 && i + 1 > length) {
            length = i + 1
        }
        if (map.has(sum)) {
            if (i - map.get(sum) > length) {
                length = i - map.get(sum)
            }
            continue
        }
        map.set(sum, i)
    }
    return length
}
console.log(findMaxLength([0, 1, 0, 1, 0, 0, 1, 0, 1]))//8