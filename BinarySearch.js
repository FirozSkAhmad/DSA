//find a tarrget element index in sorted array
//3 methods
//3=>binary search method
function findTarget(arr, tar) {
    let low = 0
    let high = arr.length - 1
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2)
        if (arr[mid] == tar) return mid
        else if (arr[mid] > tar) high = mid - 1
        else {
            low = mid + 1
        }
    }
}
console.log(findTarget([1, 2, 3, 5, 7, 9, 10], 7))//4

//find a tarrget element index start and end in sorted array
function findStartEnd(arr, tar) {
    let low = 0
    let high = arr.length - 1
    let leftOcc = -1
    let rightOcc = -1
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2)
        if (arr[mid] == tar) {
            leftOcc = mid
            high = mid - 1
        }
        if (arr[mid] < tar) low = mid + 1
        else if (arr[mid] > tar) high = mid - 1
    }
    low = 0
    high = arr.length - 1
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2)
        if (arr[mid] == tar) {
            rightOcc = mid
            low = mid + 1
        }
        if (arr[mid] < tar) low = mid + 1
        else if (arr[mid] > tar) high = mid - 1
    }
    return [leftOcc, rightOcc]
}

console.log(findStartEnd([1, 2, 3, 5, 7, 7, 7, 9, 10], 7))//[ 4, 6 ]

//find the target number index in rotated sorted array
function findTarInRS(arr, tar) {
    let low = 0
    let high = arr.length - 1
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2)
        if (arr[mid] == tar) {
            return mid
        }
        if (arr[mid] >= arr[low]) {
            if (arr[low] <= tar && tar < arr[mid]) {
                high = mid - 1
            }
            else {
                low = mid + 1
            }
        }
        else if (arr[mid] <= arr[high]) {
            if (arr[mid] < tar && tar <= arr[high]) {
                low = mid + 1
            }
            else {
                high = mid - 1
            }
        }
    }
    return -1
}
console.log(findTarInRS([4, 5, 6, 7, 1, 2, 3], 6));//2
console.log(findTarInRS([4, 5, 6, 7, 1, 2, 3], 2));//5

// Search in Rotated Sorted Array II
function search(nums, target) {
    let start = 0
    let end = nums.length - 1
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2)
        if (nums[mid] == target) return true
        if (nums[start] == nums[mid] && nums[mid] == nums[end]) {
            start++
            end--
        }
        else if (nums[start] <= nums[mid]) {
            if (nums[start] <= target && target < nums[mid]) {
                end = mid - 1
                while (nums[end] == nums[mid]) end--
            }
            else {
                start = mid + 1
                while (nums[start] == nums[mid]) start++
            }
        }
        else if (nums[end] >= nums[mid]) {
            if (nums[mid] < target && target <= nums[end]) {
                start = mid + 1
                while (nums[start] == nums[mid]) start++
            }
            else {
                end = mid - 1
                while (nums[end] == nums[mid]) end--
            }
        }
    }
    return false
};
console.log(search([2, 5, 6, 0, 0, 1, 2], 0))//true
console.log(search([1, 0, 1, 1, 1], 0))//true

//peak element
function findPeakElement(nums) {
    if (nums.length == 1) {
        return 0
    }
    let start = 0
    let end = nums.length - 1
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2)
        if (mid == 0) {
            if (nums[mid] > nums[mid + 1]) return mid
            else {
                start = mid + 1
            }
        }
        else if (mid == nums.length - 1) {
            if (nums[mid] > nums[mid - 1]) return mid
            else {
                end = mid - 1
            }
        }
        if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) return mid
        else if (nums[mid + 1] > nums[mid]) {
            start = mid + 1
        }
        else if (nums[mid - 1] > nums[mid]) {
            end = mid - 1
        }
    }
};
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]))//5