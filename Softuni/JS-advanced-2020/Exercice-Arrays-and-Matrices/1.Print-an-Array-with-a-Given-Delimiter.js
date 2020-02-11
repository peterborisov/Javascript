function printArray(args){
    let delimiter = args.pop();
    args = args.join(delimiter);
    console.log(args);
}
printArray(['1', '2', '3', '*']);