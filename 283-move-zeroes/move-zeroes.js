/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let start = 0
    let end = nums.length - 1;
    let next = 0;
    while (next<=end) {
        if (nums[next] != 0) {
            let temp = nums[start];
            nums[start] = nums[next];
            nums[next] = temp;
            start++;
        }
        next++;
    }
    return nums;
};