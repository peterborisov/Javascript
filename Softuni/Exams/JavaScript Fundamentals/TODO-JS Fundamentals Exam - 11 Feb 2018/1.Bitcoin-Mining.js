function bitcoinMining(args) {
    let totalGold = 0,
        day = 0,
        bitcoin = 0,
        leftMoney = 0;
    [...args].forEach(item => {
        if (isthird(item) === true) {
            item = item - ((30 / 100) * item);
        }
        totalGold += ((item * 67.51));
        if (totalGold > 11949.16 && day === 0) {
            bitcoin++;
           day =  args.indexOf(item) + 1;
        } else if(totalGold > 11949.16){
            bitcoin++;
        }
    });
    leftMoney = totalGold - (bitcoin * 11949.16)
    console.log(`Bought bitcoins: ${bitcoin}`);
    if (day > 0) {
        console.log(`Day of the first purchased bitcoin: ${day}`);
    }
    console.log(`Left money: ${leftMoney.toFixed(2)} lv.`);

    function isthird(i) {
        return i % 3 === 0;
    }
}

bitcoinMining([
 100, 200, 300
]
);