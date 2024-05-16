/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    let iteration = 0;
    while (iteration<=end) {
        if (nums[iteration] == 0) {
            nums[iteration] = nums[start];
            nums[start] = 0;
            start++;
            iteration++;
        } else if (nums[iteration] == 2) {
            nums[iteration] = nums[end];
            nums[end] = 2;
            end--;
        } else {
            iteration++;
        }
    }
};