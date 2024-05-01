/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let firstIndex = word.indexOf(ch);
    let reverseString = word.slice(0, firstIndex + 1).split('').reverse().join('');
    return reverseString + word.slice(firstIndex+1);
};