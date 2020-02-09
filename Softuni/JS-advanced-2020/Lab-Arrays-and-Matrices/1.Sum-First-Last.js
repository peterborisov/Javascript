function firstLast(args) {
    let { 0: a, [args.length - 1]: b } = args;
    console.log(Number(a) + Number(b));
}

firstLast(['20', '30', '40']);