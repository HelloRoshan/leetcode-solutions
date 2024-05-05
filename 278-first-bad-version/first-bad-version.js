/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if (n == 1)return n;

        let checkBad = (mid, upper, lower) => {
            console.log(mid, upper, lower)
            // check first half
            if (isBadVersion(mid)){
                if (isBadVersion(mid-1)) {
                    return checkBad(Math.floor(((mid+lower)/2)), mid, lower);
                }
                return mid;
            // check second half
            } else {
                return checkBad(Math.round((mid+upper)/2), upper, mid);
            }
        }
        return checkBad(Math.round(n/2), n, 1);
    };
};