/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (num.toString().length < 2) {
        return num;
    }
    let digitArray = num.toString().split('').map(n => parseInt(n, 10));
    let result = 0;
    digitArray.forEach(num => result += num);
    return addDigits(result)
};