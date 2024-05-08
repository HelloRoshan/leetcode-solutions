/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let uniqueSubString = '';
    let maxSubStringLength = 0;
    for ( let i =0; i<s.length; i++) {
        start = i;
        end = s.length - 1;
        while (start<=end) {
            if (uniqueSubString.includes(s[start])) {
                break;
            }

            uniqueSubString += s[start];
            start++;
        }

        // update max substring length
        if (uniqueSubString.length > maxSubStringLength) {
            maxSubStringLength = uniqueSubString.length;
        }

        // if whole string is composed of unique characters and the largest substring
        if (maxSubStringLength  == s.length) return s.length;

        // rest the variable
        uniqueSubString = '';
    }
    return maxSubStringLength;
};