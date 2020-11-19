function birthdayCakeCandles(candles) {
    let sorted = candles
    .sort((a, b) => { return b - a; })
    .filter(el => { return el === candles[0] })
    return sorted.length;
}

console.log(birthdayCakeCandles([3, 2, 1, 3]))