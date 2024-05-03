/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let indexOfTarget = nums.indexOf(target);
    if (indexOfTarget > -1) {
        return indexOfTarget;
    } else {
        nums.push(target);
        nums.sort((a,b) => a-b);
        return nums.indexOf(target)
    }
};