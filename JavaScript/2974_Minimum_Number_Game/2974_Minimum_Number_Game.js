/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    nums.sort((a,b) => a-b);
    let emptyArr = [];
    for(let i =0; i<nums.length; i+=2) {
        emptyArr.push(nums[i+1], nums[i]);
    }
    return emptyArr;
};