function fiboEvenSum(num) {
    const arrFib = [1, 1];
    let nextFib = 0
    while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
        arrFib.unshift(nextFib);
    }
    return arrFib.filter(x => x % 2 === 0).reduce((a, b) => a + b);
}

console.log(fiboEvenSum(100000))