/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    for (let i=n;n<=150;i++) {
        if(i%2 == 0 && i%n == 0) {
            return i;
        }
    }
};