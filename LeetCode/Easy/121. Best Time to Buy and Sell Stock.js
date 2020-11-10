/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = (prices) =>{
    let min = Infinity,
        profit = 0;
    prices.map((el) => {
        el < min ? min = el : el - min > profit ? profit = el - min : '';
    })
    return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))