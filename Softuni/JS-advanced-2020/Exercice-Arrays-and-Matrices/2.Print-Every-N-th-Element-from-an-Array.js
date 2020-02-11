function printNElement(args) {
    let step = Number(args.pop());
    for (let i = 0; i < args.length; i += step) {
        console.log(args[i]);
    }
}

printNElement(['5', '20', '31', '4', '20', '2']);