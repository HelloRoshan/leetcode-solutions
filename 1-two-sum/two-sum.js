/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    // for (let i=0;i<nums.length;i++) {
    //     for(let j=i+1;j<nums.length;j++) {
    //        if(nums[i] + nums[j] == target) {
    //            return [i,j]
    //        } 
    //     }   
    // }
    let hashTable = {};
    for (let i=0;i<nums.length;i++) {
        if (hashTable[nums[i]] != null) {
            return[hashTable[nums[i]], i]
        }
        hashTable[target-nums[i]] = i;
    }
};