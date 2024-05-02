/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    let possiblePosInt = [];
    for (let i=0; i < nums.length; i++) {
        if (nums[i] > 0 && nums.includes(-nums[i])) {
            possiblePosInt.push(nums[i]);
        }
    }
    return possiblePosInt.length ? possiblePosInt.sort((a,b) => b-a)[0] : -1;
};