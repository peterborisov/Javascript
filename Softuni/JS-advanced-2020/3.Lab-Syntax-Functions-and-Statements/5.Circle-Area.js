function circleArea(args) {

    if (isNaN(args)) {
        console.log(`We can not calculate the circle area, because we receive a ${typeof (args)}.`)
    } else {
        console.log(`${(Math.PI * Math.pow(args, 2)).toFixed(2)}`);
    }
}
circleArea();