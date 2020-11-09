/**
 *
 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
 */

function score(dice) {
    let obj = [0, 0, 0, 0, 0, 0, 0];
    let sum = 0;
    dice.map(el => { obj[el]++; })
    sum += obj[1] < 3 ? obj[1] * 100 : 1000 + 100 * (obj[1] - 3);
    sum += obj[2] >= 3 ? 200 : 0;
    sum += obj[3] >= 3 ? 300 : 0;
    sum += obj[4] >= 3 ? 400 : 0;
    sum += obj[5] < 3 ? obj[5] * 50 : 500 + 50 * (obj[5] - 3);
    sum += obj[6] >= 3 ? 600 : 0;
    return sum;
}

console.log(score([5, 1, 3, 4, 1]))
