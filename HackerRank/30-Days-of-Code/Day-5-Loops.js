function multiply(n) {
    return [...new Array(10)]
        .map((el, index) => console.log(`${n} x ${index + 1} = ${n * (index + 1)}`))
}

multiply(2)