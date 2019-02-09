function main(arr) {
    var money =parseFloat( arr[0]);
    var rate = parseFloat(arr[1]);
    var pizzaPrice =parseFloat( arr[2]);
    var lasagnaPrice = parseFloat(arr[3]);
    var sandwichPrice = parseFloat(arr[4]);
    var pizzaQuantity = parseFloat(arr[5]);
    var lasagnaQuantity = parseFloat(arr[6]);
    var sandwichQuantity = parseFloat(arr[7]);
    var sum=(((pizzaPrice/rate)*pizzaQuantity)+((lasagnaPrice/rate)*lasagnaQuantity)+((sandwichPrice/rate)*sandwichQuantity)).toFixed(2);
    if(money>sum){
        console.log('Garfield is well fed, John is awesome. Money left: $'+((money-sum).toFixed(2))+'.')
    }else {
        console.log('Garfield is hungry. John is a badass. Money needed: $'+((sum-money).toFixed(2))+'.')
    }
}
var input = [
    '10',
    '1.55',
    '5',
    '4',
    '3',
    '5',
    '5',
    '1'
];
main(input);