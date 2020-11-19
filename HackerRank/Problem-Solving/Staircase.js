function staircase(n) {
    let sharp = 1,
        empty = n - 1;
    [...new Array(n)].map(() => {
        console.log(`${' '.repeat(empty)}${'#'.repeat(sharp)}`)
        sharp++;
        empty--;
    }, 0)
}

staircase(6)