/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let open = ['{', '(', '['];
    let map = {
        '}' : '{',
        ')' : '(',
        ']' : '['
    }
    let stack = [];
    for(let i=0; i<s.length; i++) {
        if (open.includes(s[i])) {
            stack.push(s[i]);
        } else if (stack[stack.length - 1] == map[s[i]]) {
            stack.pop();
        } else {
            return false;
        }
    }
    
    if (stack.length == 0) {
        return true;
    }
    return false;
};