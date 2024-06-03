/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
  let start = 0;
  let end = s.length - 1;
  let moving = 0;
  while (start <= end) {
    if (s[start] == t[moving]) {
        moving++;
        start++;
    } else if (s[start] != t[moving] && start == end) {
        break;
    } else {
        start++;
    }
  }
  return t.length - moving;
};