/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let a = s.substring(0, s.length/2);
    let b = s.substring(s.length/2);
    vowel_count_a = a.split('').filter(el => vowels.includes(el.toLowerCase())).length;
    vowel_count_b = b.split('').filter(el => vowels.includes(el.toLowerCase())).length;
    return vowel_count_a == vowel_count_b
};