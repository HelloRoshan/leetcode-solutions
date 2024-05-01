/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let newarr= [];
    arr.forEach((el, index) => {
        newarr.push(fn(el, index))
    });
    return newarr;
};