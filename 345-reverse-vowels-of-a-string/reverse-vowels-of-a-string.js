/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let start = 0;
    let end = s.length - 1
    let str = s.split('');
    while(start <= end) {
        if(vowels.includes(str[start].toLowerCase())) {
            if(vowels.includes(str[end].toLowerCase())) {
                let temp = str[start];
                str[start] = str[end];
                str[end] = temp;
                start++;
            }
            end--;
        } else {
            start++;
        }
    }
    return str.join('');
};