/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let sorted = [...nums1, ...nums2].sort((a,b) => a-b);
    // For odd number of integers, median is the middle integer
    if (sorted.length%2 != 0) {
        return sorted[Math.floor(sorted.length/2)];
    }
    // For even number of integers, median is average of middle two data points
    return (sorted[sorted.length/2] + sorted[(sorted.length/2)-1])/2;
};