/**
 * @param {number[]} nums
 * @return {boolean}
 */
//  Solution 1
// !nums.every((n, index) => index == nums.lastIndexOf(n));
//  Solution 2
// nums.some((n, index) => index != nums.lastIndexOf(n))
//  Soltuion 3
// nums.some((n, index) => index != nums.indexOf(n));

var containsDuplicate = function(nums) {
    if ( new Set(nums).size != nums.length) {
        return true
    }
    return false;
};