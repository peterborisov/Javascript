function populationInTown(args) {
    let result = {};

    for (let i = 0; i < args.length; i++) {
        let element = args[i],
            word = element.split('<->'),
            city = word[0],
            population = Number(word[1]);

        if (!result.hasOwnProperty(city)) {
            result[city] = population;
        } else if (result.hasOwnProperty(city)) {
            result[city] += population;
        }
    }

    for (let [key, value] of Object.entries(result)) {
        console.log(`${key}: ${value}`);
    }
}

populationInTown(
    ['Sofia <-> 1200000',
        'Montana <-> 20000',
        'New York <-> 10000000',
        'Washington <-> 2345000',
        'Washington <-> 2345000',
        'Las Vegas <-> 1000000']
);