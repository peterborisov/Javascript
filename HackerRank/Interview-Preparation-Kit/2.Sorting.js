//Bubble Sort
//=========================
function countSwaps(a) {
    let step = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < (a.length - i - 1); j++) {
            if (a[j] > a[j + 1]) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]];
                step++;
            }
        }
    }
    console.log(`Array is sorted in ${step} swaps.`)
    console.log(`First Element: ${a[0]}`)
    console.log(`Last Element: ${a.pop()}`)
    return step;
};
console.log(countSwaps([3, 2, 1])) //[ 1, 2, 3 ]

//Mark and Toys
//==============================
// Mark and Jane are very happy after having their first child. 
// Their son loves toys, so Mark wants to buy some. 
// There are a number of different toys lying in front of him, tagged with their prices. 
// Mark has only a certain amount to spend, and he wants to maximize the number of toys he buys with this money.
// Given a list of prices and an amount to spend, what is the maximum number of toys Mark can buy? 
// For example, if  and Mark has  to spend, he can buy items  for , or  for  units of currency. 
// He would choose the first group of  items.

function maximumToys(prices, k) {
    let sum = 0, count = 0;
    prices = prices.sort((a, b) => a - b);
    for (const price of prices) {
        sum <= k ? (sum += price, count++) : '';
    }
    return count - 1;
}
console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50))

//Fraudulent Activity Notifications
/*HackerLand National Bank has a simple policy for warning clients about possible fraudulent account activity. 
If the amount spent by a client on a particular day is greater than or equal to  
the client's median spending for a trailing number of days, they send the client a 
notification about potential fraud. The bank doesn't send the client any notifications 
until they have at least that trailing number of prior days' transaction data.
Given the number of trailing days  and a client's total daily expenditures for a period of  days, 
find and print the number of times the client will receive a notification over all  days.
For example,  and . On the first three days, they just collect spending data. 
At day , we have trailing expenditures of . The median is  and the day's expenditure is . 
Because , there will be a notice. The next day, our trailing expenditures are  and the expenditures are.
This is less than  so no notice will be sent. Over the period, there was one notice sent.*/
  function getMedianx2(countArr, days) {
    let sum = 0
    for (let i = 0; i < countArr.length; i++) {
      sum += countArr[i]
      if (sum * 2 === days) return (i * 2 + 1)
      if (sum * 2 > days) return (i * 2)
    }
  }

  function activityNotifications(debits, days) {
    const countArr = new Array(201).fill(0)
    let notices = 0
    for (let i = 0; i < days; i++) {
      countArr[debits[i]]++
    }
    for (let i = days; i < debits.length; i++) {
      const medianx2 = getMedianx2(countArr, days)
      if (debits[i] >= medianx2) notices++
      if (i === debits.length - 1) break
      countArr[debits[i - days]]--
      countArr[debits[i]]++
    }
    return notices
  }