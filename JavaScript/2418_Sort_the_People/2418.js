/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let nhArray= []
    names.forEach((name, index) => {
        nhArray.push({
            name,
            height: heights[index]
        });
    });
    return nhArray.sort((a,b) => b.height - a.height).map(el => el.name);
};