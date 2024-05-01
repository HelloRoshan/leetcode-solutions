/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    let optimalLeftOverMoney = [];
    for (let i=0; i<prices.length;i++) {
        for(let j=0; j<prices.length;j++) {
            if(i != j && (prices[i]+prices[j] <= money)) {
                optimalLeftOverMoney.push(money - prices[i]-prices[j]);
            }
        }
    }
    if (optimalLeftOverMoney.length) {
        optimalLeftOverMoney.sort((a,b) => b-a);
        return optimalLeftOverMoney[0];
    } else {
        return money
    }
};