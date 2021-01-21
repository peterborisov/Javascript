function carFactory(args) {
    let {model, power, color, carriage, wheelsize} = args;

    let engines = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 }
    ];

    let carriages = [
        { type: 'hatchback', color: color },
        { type: 'coupe', color: color }
    ];

    let engineChoise = () => { return engines.filter(e => e.power >= power)[0] }
    let carriageChoise = () => { return carriages[0].type === carriage ? carriages[0] : carriages[1]}
    let wheels = wheelsize % 2 === 1 ? wheelsize : wheelsize - 1;

    return {
        model: model,
        engine: engineChoise(),
        carriage: carriageChoise(),
        wheels: new Array(4).fill(wheels)
    }
}

console.log(carFactory(
    {
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    }
))