/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let elementCount = {};
    let majorityElementSize = nums.length/2;
    for (const num of nums){
        if (elementCount[num] != undefined ||  elementCount[num] != null) {
            elementCount[num]++;
        } else {
            elementCount[num] = 1;
        }

        if (elementCount[num] > majorityElementSize) {
            return num;
        }         
    };
        
};