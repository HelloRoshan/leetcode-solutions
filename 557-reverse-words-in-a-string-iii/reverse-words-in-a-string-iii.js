/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let wordArray = s.split(' ');
    wordArray.forEach((word, index) => {
        wordArray[index] = word.split('').reverse().join('');
    });
    return wordArray.join(' ');
};