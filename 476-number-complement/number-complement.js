/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let binaryNum = num.toString(2);
    let binayNumArray  = binaryNum.split('');
    binayNumArray.forEach((num, index) => {
        binayNumArray[index] = binayNumArray[index] == 0 ? 1: 0;
    });
    return BigInt(`0b${binayNumArray.join('')}`);
};