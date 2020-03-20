function carFactory(args) {
    let engine = [
      { power: 90, volume: 1800 },
      { power: 120, volume: 2400 },
      { power: 200, volume: 3500 }
    ]
    let carriage = {
        'hatchback': { type: 'hatchback', color: args.color },
        'coupe': { type: 'coupe', color: args.color }
    }
    args.power = engine.find(e => args.power <= e.power);
    args.carriage = carriage[args.carriage];
    args.wheelsize = args.wheelsize % 2 === 0 ? args.wheelsize - 1 : args.wheelsize;

    let result = {
        model: args.model,
        engine: args.power,
        carriage: args.carriage,
        wheels: Array(4).fill(args.wheelsize)
    };
    return result;
}

console.log(carFactory(
    {
        model: 'VW Golf II',
        power: 110,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 13
    }
))
