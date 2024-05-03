/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    // parseInt removes leading zeros
    let v1 = version1.split('.').map(n => parseInt(n, 10));
    let v2 = version2.split('.').map(n => parseInt(n, 10));

    let lengthDiff = Math.abs(v1.length - v2.length);
    if (v1.length > v2.length) {
        v2.length = v1.length;
        v2.fill(0, v2.length - lengthDiff);
    } else if (v2.length > v1.length) {
        v1.length = v2.length;
        v1.fill(0, v1.length - lengthDiff);
    }
    
    let v1Num = parseInt(v1.join(''), 10);
    let v2Num = parseInt(v2.join(''), 10);
    return v1Num>v2Num ? 1 : (v2Num>v1Num ? -1 : 0);
};