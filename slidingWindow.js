//Given a string you need to print the longest possible substring that has unique characters.
function lSubString(str) {
    let start = 0
    let end = 0
    let map = new Map()
    let out = ""
    while (end <= str.length - 1) {
        if (map.has(str[end])) {
            map.delete(str[start])
            start++
        }
        else {
            map.set(str[end], 1)
            if (map.size > out.length) {
                out = [...map.keys()].join("")
            }
            end++
        }
    }
    return out
}
console.log(lSubString("aabacbebebefghi"))//befghi
console.log(lSubString("aabacbebebe"))//acbe

//Given a string and a positive number k, find the longest substring of the string containing k distinct characters. If k is more than the total number of distinct characters in the string, return the whole string.
function lSubStrK(str, k) {
    let start = 0
    let end = 0
    let out = ""
    let rOut = ""
    let map = new Map()
    while (end <= str.length) {
        if (map.size > k) {
            out = out.slice(1)
            if (map.get(str[start]) > 1) {
                map.set(str[start], map.get(str[start]) - 1)
            } else {
                map.delete(str[start])
            }
            start++
            continue
        }
        if (map.size == k) {
            if (out.length > rOut.length) {
                rOut = out
            }
        }
        if (map.has(str[end])) {
            map.set(str[end], map.get(str[end]) + 1)
        }
        else {
            map.set(str[end], 1)
        }
        out += str[end]
        end++
    }
    if (rOut.length == 0) return str
    return rOut
}
console.log(lSubStrK("abcbdbdbbdcdabd", 2))//bdbdbbd
console.log(lSubStrK("abcbdbdbbdcdabd", 3))//bcbdbdbbdcd
console.log(lSubStrK("abcbdbdbbdcdabd", 5))//abcbdbdbbdcdabd

//Given a string and a positive number k, find the count of  substrings(with out any specified length) of the string containing k distinct characters. If k is more than the total number of distinct characters in the string, return the whole string.
function countSubstring(str, k) {
    function count(str, k) {
        let start = 0
        let end = 0
        let out = ""
        // let rOut = ""
        let count = 0
        let map = new Map()
        while (end <= str.length) {
            if (map.size > k) {
                out = out.slice(1)
                if (map.get(str[start]) > 1) {
                    map.set(str[start], map.get(str[start]) - 1)
                } else {
                    map.delete(str[start])
                }
                start++
                continue
            }
            if (map.size <= k) {
                // if (out.length > rOut.length) {
                //     rOut = out
                // }
                count += out.length
            }
            if (map.has(str[end])) {
                map.set(str[end], map.get(str[end]) + 1)
            }
            else {
                map.set(str[end], 1)
            }
            out += str[end]
            end++
        }
        // if (rOut.length == 0) return str
        return count
    }
    return count(str, k) - count(str, k - 1)
}
console.log(countSubstring("aabac", 2))//6
console.log(countSubstring("aaba", 2))


//Given a string and a positive number k, find the count of  substrings(with any specified length k) of the string containing k distinct characters. If k is more than the total number of distinct characters in the string, return the whole string.

var countGoodSubstrings = function (str, k) {
    let start = 0
    let end = 0
    let out = ""
    // let rOut = ""
    let count = 0
    let map = new Map()
    while (end <= str.length) {
        if (map.size > k) {
            out = out.slice(1)
            // if (map.get(str[start]) > 1) {
            //     map.set(str[start], map.get(str[start]) - 1)
            // } else {
            map.delete(str[start])
            // }
            start++
            continue
        }
        if (map.size == k) {
            // if (out.length > rOut.length) {
            //     rOut = out
            // }
            count++
        }
        if (map.has(str[end])) {
            map.delete(str[start])
            start++
            continue
        }
        else {
            map.set(str[end], 1)
        }
        out += str[end]
        end++
    }
    // if (rOut.length == 0) return str
    return count
}
console.log(countGoodSubstrings("aababcabc", 3))//4


//Find All Anagrams in a String
var findAnagrams = function (s, p) {
    let arr1 = new Array(26).fill(0)
    let arr2 = new Array(26).fill(0)
    for (let i = 0; i < p.length; i++) {
        arr1[p.charCodeAt(i) - 97]++
        arr2[s.charCodeAt(i) - 97]++
    }
    let start = 0
    let end = p.length
    let out = []
    while (end <= s.length) {
        if (arr1.join("") === arr2.join("")) {
            out.push(start)
        }
        arr2[s.charCodeAt(start) - 97]--
        arr2[s.charCodeAt(end) - 97]++
        end++
        start++
    }
    return out
};
console.log(findAnagrams("cbaebabacd", "abc"))//[ 0, 6 ]


//Permutation in String
function checkInclusion(str1, str2) {
    let arr1 = new Array(26).fill(0)
    let arr2 = new Array(26).fill(0)
    for (let i = 0; i < str1.length; i++) {
        arr1[str1.charCodeAt(i) - 97]++
        arr2[str2.charCodeAt(i) - 97]++
    }
    let start = 0
    let end = str1.length
    while (end <= str2.length) {
        if (arr1.join("") == arr2.join("")) return true
        else {
            arr2[str2.charCodeAt(start) - 97]--
            start++
            arr2[str2.charCodeAt(end) - 97]++
            end++
        }
    }
    return false
}
console.log(checkInclusion("r", "pilmtnzraxj"))//true
console.log(checkInclusion("ab", "eidbaooo"))//true

// Find all substrings of a string that are a permutation of another string
function pStrings(str1, str2) {
    let arr1 = new Array(26).fill(0)
    let arr2 = new Array(26).fill(0)
    for (let i = 0; i < str2.length; i++) {
        arr1[str1.charCodeAt(i) - 65]++
        arr2[str2.charCodeAt(i) - 65]++
    }
    let start = 0
    let end = str2.length
    let out = []
    while (end <= str1.length) {
        if (arr1.join("") == arr2.join("")) {
            out.push(str1.slice(start, end))
        }
        arr1[str1.charCodeAt(start) - 65]--
        start++
        arr1[str1.charCodeAt(end) - 65]++
        end++
    }
    return out
}
console.log(pStrings("XYYZXZYZXXYZ", "XYZ"));//[ 'YZX', 'XZY', 'YZX', 'XYZ' ]

//Given an array of integers Arr of size N and a number K. Return the maximum sum of a subarray of size K.
function maximumSumSubarray(arr, k) {
    let sum = 0
    for (let i = 0; i < k; i++) {
        sum += arr[i]
    }
    let orgSum = sum
    let start = 0
    let end = k
    while (end <= arr.length) {
        sum -= arr[start]
        start++
        sum += arr[end]
        end++
        if (sum > orgSum) {
            orgSum = sum
        }
    }
    return orgSum
}
console.log(maximumSumSubarray([300, 800, 500, 100, 600, 1500], 3))//2200


//Given an array A[] of size N and a positive integer K, find the first negative integer for each and every window(contiguous subarray) of size K.
function printFirstNegativeInteger(n, nums, k) {
    let arr = []
    for (let i = 0; i < k; i++) {
        arr.push(nums[i])
    }
    let end = k
    let neg = []
    while (end <= nums.length) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < 0) {
                neg.push(arr[i])
                break
            }
            if (i == arr.length - 1) {
                neg.push(0)
            }
        }
        arr = arr.slice(1)
        arr.push(nums[end])
        end++
    }
    return neg
}
console.log(printFirstNegativeInteger(5, [-8, 2, 3, -6, 10], 2))
console.log(printFirstNegativeInteger(8, [12, -1, -7, 8, -15, 30, 16, 28], 3))




