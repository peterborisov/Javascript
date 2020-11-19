function miniMaxSum(arr) {
    let result = [];
    let sum = arr.reduce((a, b) => { return a + b })
    arr.map(el => { result.push(sum - el) })
    console.log(`${Math.min(...result)} ${Math.max(...result)}`)
}

console.log(miniMaxSum([1, 2, 3, 4, 5]))