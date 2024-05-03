/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    xRev = x.toString().split('').reverse().join('');
    return xRev == x.toString();
};