function sumByTown(args) {
    let result = {}
    args.map((el, index) => {
        let value = +(args[index + 1]);
        if (index % 2 === 0) {
            !result.hasOwnProperty(el) ? result[el] = value : result[el] += value;
        }
    })
    return JSON.stringify(result)
}

console.log(sumByTown(
    ['Sofia',
        '20',
        'Varna',
        '3',
        'Sofia',
        '5',
        'Varna',
        '4']));
