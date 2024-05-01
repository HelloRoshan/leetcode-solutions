/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        let returnVal = x;
        for(let i=functions.length-1;i>=0;i--) {
            returnVal = functions[i](returnVal);
        }
        return returnVal;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */