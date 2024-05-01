/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    let counter = 0;
    nums.sort((a,b) => a-b);
    for(let i=0; i<nums.length; i++) {
        for(let j=1;j<nums.length;j++) {
            if(i<j &&
            (nums[i]+nums[j] < target)) {
                counter++;
            }
        }
    }
    return counter;
};