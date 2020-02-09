function roadRadar(args) {
    let speed = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    }
    let result =
        ((args[0] - speed[args[1]]) >= 1 && (args[0] - speed[args[1]]) <= 20) ? 'speeding' :
        ((args[0] - speed[args[1]]) > 20 && (args[0] - speed[args[1]]) <= 40) ? 'excessive speeding' :
        ((args[0] - speed[args[1]]) > 40) ? 'reckless driving' : '';

    console.log(result);
}

roadRadar([179, 'motorway']);