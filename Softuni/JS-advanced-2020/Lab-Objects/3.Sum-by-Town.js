function sumByTown(args) {

    let result = {};
    for (let i = 0; i < args.length; i++) {
        let element = args[i];
        let elementValue = Number(args[i + 1]);
        if (i % 2 === 0) {
            if (!result.hasOwnProperty(element)) {
                result[element] = Number(elementValue);
            } else if (result.hasOwnProperty(element)) {
                result[element] += elementValue;
            }
        }
    }

   console.log(JSON.stringify(result));
}

sumByTown(
    ['Sofia',
        '20',
        'Varna',
        '3',
        'Sofia',
        '5',
        'Varna',
        '4']);
