function plusMinus(arr) {
    let count = [0, 0, 0];
    let len = arr.length;
    arr.map(el => {
        Math.sign(el) === -1 ? count[0]++ : Math.sign(el) === 1 ? count[2]++ : count[1]++;
    });
    console.log(`${(count[2] / len).toFixed(6)}\n${(count[0] / len).toFixed(6)}\n${(count[1] / len).toFixed(6)}`);
}
console.log(plusMinus([-4, 3, -9, 0, 4, 1]))