/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let start = 0;
    let next = 1;
    let duplicates = 0;
    let end = nums.length - 1;
    while (next <= end) {
        if (nums[start] != nums[next]) {
            let temp = nums[start+1];
            nums[start+1] = nums[next];
            nums[next]= temp;
            start++;
        } else {
            duplicates++;
        }
        next++;
    }
    return nums.length - duplicates;
};