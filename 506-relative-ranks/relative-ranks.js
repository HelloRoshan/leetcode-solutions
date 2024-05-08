/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let top3 = {
        1: "Gold Medal",
        2: "Silver Medal",
        3: "Bronze Medal"
    };
    let sorted = score.slice().sort((a,b) => b-a);
    let ranks = score.slice().map(s => {
        let rank = sorted.indexOf(s)+1;
        if (rank < 4) {
            return top3[rank];
        }
        return rank.toString();
    });
    return ranks
};