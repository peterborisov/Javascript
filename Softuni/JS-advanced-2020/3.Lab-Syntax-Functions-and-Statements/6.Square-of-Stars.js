function squareOfStars(args) {
    let start = 1;
    if (args === undefined) {
        args = 5;
    }
    while (start <= args) {
        console.log('* '.repeat(args));
        start++;
    }
}

squareOfStars();