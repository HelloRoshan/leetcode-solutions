/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let start = 0;
    let end = s.length - 1;
    let charArray = s.split('');
    while(start <= end) {
        if(!!charArray[start].match(/[A-Z|a-z]/i)) {
            if(!!charArray[end].match(/[A-Z|a-z]/i)) {
                let temp = charArray[start];
                charArray[start] = charArray[end];
                charArray[end] = temp;
                start++;
            }
            end--;
        } else {
            start++;
        }
    }
    return charArray.join('');
};