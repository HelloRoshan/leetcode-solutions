/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let stringArray = s.trim().split(" ");
    return stringArray[stringArray.length - 1].length;
};