/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    const p1 = await promise1;
    const p2 = await promise2;
    const returnPromise = p1 + p2;
    return Promise.resolve(returnPromise);
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */