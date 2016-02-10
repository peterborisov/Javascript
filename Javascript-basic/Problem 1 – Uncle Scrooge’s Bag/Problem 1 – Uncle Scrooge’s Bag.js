function main(array) {
    var gold, silver, bronze;
    var coins = 0;
    var coin = "coin";
    for (var i = 0; i < array.length; i++) {
        var obj = array[i];
        var objSplit = obj.split(" ");
        var coinResult = parseFloat(objSplit[1]);
        if (!objSplit[0].toLowerCase().localeCompare(coin)) {
            if (!isNaN(objSplit[1]) && (objSplit[1] % 1) === 0 && objSplit[1] > 0) {
                coins += (coinResult);
            }
        }
    }
    gold = coins / 100;
    silver = (coins / 10) % 10;
    bronze = coins % 10;
    console.log("gold : " + Math.floor(gold));
    console.log("silver : " + Math.floor(silver));
    console.log("bronze : " + Math.floor(bronze));
}
var input = ['coin -1', 'coin two', 'coin 5', 'coin 10.50', 'coin 20', 'coin 50', 'coin hundred', 'cigars 1'];
main(input);

