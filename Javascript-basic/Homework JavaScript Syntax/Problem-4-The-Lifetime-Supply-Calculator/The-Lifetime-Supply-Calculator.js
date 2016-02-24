function calcSupply(age, maxAge, food, foodPerDay) {
    var days = (maxAge - age) * 365 * foodPerDay;
    console.log(days + ' of ' + food + ' would be enough until I am ' + maxAge + ' years old.');
}
calcSupply(38, 118, 'chocolate', 0.5);
calcSupply(20, 87, 'fruits', 2);
calcSupply(16, 102, 'nuts', 1.1);



