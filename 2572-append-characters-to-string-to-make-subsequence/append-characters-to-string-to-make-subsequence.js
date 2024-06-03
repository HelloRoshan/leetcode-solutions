/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
  let start = 0;
  let end = s.length - 1;
  let moving = 0;
  let movingend = t.length - 1;
  while (start <= end && moving <= movingend) {
    if (s[start] == t[moving]) {
        moving++;
        start++;
    } else {
        start++;
    }
  }
  return t.length - moving;
};