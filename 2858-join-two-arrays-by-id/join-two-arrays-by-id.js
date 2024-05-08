/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let joinedObject = {};

    // create object based on id for later comparision
    for (let i=0; i< arr1.length; i++) {
        joinedObject[arr1[i].id]= arr1[i];
    }

    for(let i=0; i<arr2.length;i++) {
        if(joinedObject[arr2[i].id]) {
            // value of arr2 overrides value of arr1
            joinedObject[arr2[i].id] = {...joinedObject[arr2[i].id], ...arr2[i]}
        } else {
            joinedObject[arr2[i].id]= arr2[i];
        }
    }
    return Object.values(joinedObject);
};