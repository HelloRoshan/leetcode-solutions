/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length == 1) { return strs[0] };
    strs.sort((a,b) => a.length - b.length);
    for ( let i =0; i< strs[0].split('').length; i++) {
        let currentSubStr = strs[0].substring(0, i+1);
        if (!strs.every(str => str.startsWith(currentSubStr))) {
            // return prefix before this case, that was common in all
            return strs[0].substring(0, i);
        }
    }
    return strs[0];
};