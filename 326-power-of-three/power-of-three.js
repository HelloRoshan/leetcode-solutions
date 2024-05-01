/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    // 1 is always power of 3
    if(n==1) return true
    // 0 can cause infinte recursive loop
    if (n%3 != 0 || n < 3) {
        return false
    }
    let remainder = n/3
    // When decimal, not power of 3
    if (remainder % 1 != 0) {
        return false
    }
    if(remainder == 1) {
        return true
    }
    return isPowerOfThree(remainder)
};