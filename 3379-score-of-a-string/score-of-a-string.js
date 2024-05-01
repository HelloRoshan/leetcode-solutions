/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let stringArray = s.split('');
    let result = 0;
    stringArray.forEach((s, index) => {
        if (index != stringArray.length - 1) {
            result += Math.abs(s.charCodeAt(0) - stringArray[index+1].charCodeAt(0))
        }
    });
    return result;
};