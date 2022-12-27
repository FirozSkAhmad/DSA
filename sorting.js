//BubbleSort
//worst&Avg-O(N^2)
//Best-O(N)
function bubbleSort(arr) {
    let shouldSort = true
    let length = arr.length
    shouldSort = false
    length--
    for (let i = 0; i < length; i++) {
        if (arr[i] > arr[i + 1]) {
            arr[i] = arr[i] + arr[i + 1]
            arr[i + 1] = arr[i] - arr[i + 1]
            arr[i] = arr[i] - arr[i + 1]
            shouldSort = true
        }
    }
    if (shouldSort) {
        bubbleSort(arr)
    }
    return arr
}
console.log(bubbleSort([6, 3, 9, 5, 2, 8]))

//MergeSort
//Average and best time complexity:-O(NlogN)
//Wrost time complexity:-O(NlogN)
function conquer(arr, low, mid, high) {
    let p = low
    let q = mid + 1
    let newArr = new Array(high - low + 1)
    let x = 0
    while (p <= mid && q <= high) {
        if (arr[p] <= arr[q]) {
            newArr[x] = arr[p]
            p++
        } else {
            newArr[x] = arr[q]
            q++
        }
        x++
    }
    while (p <= mid) {
        newArr[x] = arr[p]
        p++
        x++
    }
    while (q <= high) {
        newArr[x] = arr[q]
        q++
        x++
    }
    for (let i = 0, j = low; i < newArr.length; i++, j++) {
        arr[j] = newArr[i]
    }
}
function mergeSort(arr, low, high) {
    if (low >= high) {
        return
    }
    let mid = low + Math.floor((high - low) / 2)
    mergeSort(arr, low, mid)
    mergeSort(arr, mid + 1, high)
    conquer(arr, low, mid, high)
    return arr
}
console.log(mergeSort([6, 3, 9, 5, 2, 8], 0, 5))

//quickSort
//Average and best time complexity:-O(NlogN)
//Wrost time complexity:-O(N^2)
function partition(arr, low, high) {
    let pivot = arr[high]
    let i = low - 1
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
    i++
    let temp = arr[i]
    arr[i] = pivot
    arr[high] = temp
    return i
}
function quickSort(arr, low, high) {
    if (low < high) {
        let pindx = partition(arr, low, high)
        quickSort(arr, low, pindx - 1)
        quickSort(arr, pindx + 1, high)
        return arr
    }

}
console.log(quickSort([6, 3, 9, 5, 2, 8], 0, 5))
console.log(quickSort([6, 3, 2, 9, 5, 2, 8], 0, 6))
console.log(quickSort([5, 6, 3, 5, 12], 0, 4))

//insertionSort
//Avg&worst-O(N^2)
//Best-O(N)
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i]
        let j = i - 1
        while (arr[j] > current && j >= 0) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = current
    }
    return arr
}
console.log(insertionSort([6, 3, 9, 5, 2, 8]))

