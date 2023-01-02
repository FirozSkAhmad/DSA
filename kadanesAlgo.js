// Maximum Subarray
function maxSubArray(nums) {
    let sum = 0
    let maxSum = -Infinity
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        maxSum = Math.max(sum, maxSum)
        if (sum < 0) {
            sum = 0
        }
    }
    return maxSum
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))//6