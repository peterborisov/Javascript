function reducer(arr) {
    let sortedArr = arr.sort((a, b) => {
        return a - b;
    });
    let sum = 0,
        product = 1;

    sortedArr.map(el => {
        sum += el;
        product *= el;
    })

    console.log(`Sum = ${sum}`)
    console.log(`Min = ${sortedArr[0]}`)
    console.log(`Max = ${sortedArr[1]}`)
    console.log(`Product = ${product}`)
    console.log(`Join = ${arr.join('')}`)
}

reducer([2, 3, 10, 5])