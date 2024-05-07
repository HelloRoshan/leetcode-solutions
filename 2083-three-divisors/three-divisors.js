/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
    if ([1,2,3].includes(n)) return false;
    // if perfect square and the sqaure root is prime,it has 3 divisors exactly
    let sqrRoot = Math.sqrt(n)
    if (sqrRoot%1==0) {
        for (let i = 2; i < sqrRoot; i++) {
            if (sqrRoot % i == 0) {
                return false;
            }
        }
        return true;
    }
    return false;

    // Old Solution
    // let count = 2;
    // for (let i=2; i<n; i++) {
    //     if (n%i==0) {
    //         count++;
    //     }
    //     if (count > 3) return false;
    // }
    // return count == 3 ? true : false;
};