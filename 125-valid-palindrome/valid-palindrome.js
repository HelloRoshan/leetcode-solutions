/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let trimmedString = s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    return trimmedString == trimmedString.split('').reverse().join('');
};