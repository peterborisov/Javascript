let rotLeft = (a, d) => {
    let arr = [];
    a.map(el => { arr.push(el) })
    for (let j = 1; j <= d; j++) {
        arr.shift(arr.push(arr[0]));
    }
    return arr;
}

console.log(rotLeft([5, 4], [1, 2, 3, 4, 5]));