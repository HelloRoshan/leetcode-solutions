/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let largeInt = BigInt(digits.join(''), 10) + 1n;
    return largeInt.toString().split('').map(n => parseInt(n,10));
};