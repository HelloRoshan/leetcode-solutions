/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let start = 0;
    let next = 1;
    let end = nums.length - 1;
    let color = 0;
    while (color < 3) {
        if (next > end) {
            //continue from previous start position and loop for new color
            next = start+1;
            color++;
        }
        if (nums[start] == color) {
            start++;
            next++;
        } else if (nums[start] != nums[next] && nums[next] == color) {
            nums[next] = nums[start]
            nums[start] = color;
            start++;
        } else {
            next++;
        }
    }
    return nums;
};