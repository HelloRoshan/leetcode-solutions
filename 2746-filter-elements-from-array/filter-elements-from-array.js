/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const returnArr = [];
    arr.forEach((el, index) => {
        if(fn(el, index)){
            returnArr.push(el)
        }
    });
    return returnArr;
};