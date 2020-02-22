function evenPositionElement(args) {
    let result = [];
    
    for (const key in args) {
        const element = args[key];
        if (key % 2 === 0) {
            result.push(args[key]);
        }
    }

    console.log(result.join(' '))
}

evenPositionElement(['20', '30', '40']);