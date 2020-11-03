/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = (prices) => {
    let result = 0;
    prices.map((el, index) => {
        prices[index] > prices[index - 1] ? result += prices[index] - prices[index - 1] : ''
    })
    return result;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))