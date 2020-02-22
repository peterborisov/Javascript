function cookingByNumbers(args) {
    let result = args[0];
    let removeFirst = args.slice(1);
    for (el of removeFirst) {
        result =
            el === 'chop' ? result / 2 :
            el === 'dice' ? Math.sqrt(result) :
            el === 'spice' ? result += 1 :
            el === 'bake' ? result * 3 :
            el === 'fillet' ? (result / 5) * 4 : result;
            console.log(result)
    }
}

cookingByNumbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);