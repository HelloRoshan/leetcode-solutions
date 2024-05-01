/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let count = init
    function valUpdate(val) {
        count += val;
        return count;
    }
    return {
        increment() {
            return valUpdate(1)
        },
        decrement() {
            return valUpdate(-1)
        },
        reset() {
            count = init
            return count
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */