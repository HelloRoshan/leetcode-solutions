/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    if(new Set(nums).size == nums.length) { return false; }
    for (let i=0; i< nums.length; i++) {
        let nindex = nums.indexOf(nums[i], i+1);
        if (nindex > -1 &&
            (Math.abs(i-nindex) <= k)) {
                return true;
        }
    }
    return false;
};