function aggregateElements(args){
    let elements = args.map(Number);
    let joiner = '' + args;
    console.log(args.reduce((a, b) => a + b));
    console.log(args.reduce((a, b) => 1/a + 1/b));
    console.log(joiner.split(',').join(''));
}

aggregateElements([2, 4, 8, 16])