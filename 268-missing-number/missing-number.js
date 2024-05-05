/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let missingArray = nums.sort((a,b) => a-b);
    for (let i=0; i <= missingArray.length; i++) {
        if (i != missingArray[i]) {
            return i;
        }
    }
    return missingArray.length;
};