function populationInTown(args) {
    let result = {};
    args.map(el => {
        let [city, population] = el.split('<->');
        !result.hasOwnProperty(city) ? result[city] = +(population) : result[city] += +(population);
    })

    for (let [key, value] of Object.entries(result)) {
        console.log(`${key}: ${value}`);
    }
}

populationInTown(
    ['Sofia <-> 1200000',
        'Montana <-> 20000',
        'New York <-> 10000000',
        'Washington <-> 2345000',
        'Las Vegas <-> 1000000']
);