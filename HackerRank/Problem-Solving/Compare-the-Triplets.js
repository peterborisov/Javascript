function compareTriplets(a, b) {
    let result = [0, 0];
    [...new Array(3)].map((el, index) => {
        a[index] > b[index] ? result[0]++ :
            a[index] < b[index] ? result[1]++ : ''
    })
    return result;
}

console.log(compareTriplets([17, 28, 30], [99, 16, 8]));