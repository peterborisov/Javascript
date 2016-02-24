function main(km) {
    var knots = 1.852;
    var result = km / knots;
    console.log((Math.round(result * 100) / 100).toFixed(2));
}
main(20);
main(112);
main(400);