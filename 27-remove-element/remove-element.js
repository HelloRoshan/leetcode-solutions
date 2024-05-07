/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if (nums.length == 1 && nums[0] == val) { return 0; }

    let start = 0;
    let end = nums.length - 1;
    let occurences = 0;
    
    while (start<=end) {
        if (nums[start] == val) {
            if(nums[end] != val) {
                let temp = nums[start];
                nums[start] = nums[end];
                nums[end] = temp;
            }
            occurences++;
            end--;
        } else {
            start++
        }
    }
    return nums.length - occurences;
};