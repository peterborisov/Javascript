function multiplesOf3and5(number) {
    let sum = 0;
    [...Array(number)].map((el, index ) => {
        index % 3 === 0 || index % 5 === 0 ? sum +=index : ''
    });
    return sum;
}

multiplesOf3and5(1000);