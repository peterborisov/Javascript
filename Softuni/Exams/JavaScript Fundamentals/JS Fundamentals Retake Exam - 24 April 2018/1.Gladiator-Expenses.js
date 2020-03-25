function gladiatorExpenses(lostFLight, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let result = 0;
    result += (Math.floor(lostFLight / 2)) * helmetPrice,
        result += (Math.floor(lostFLight / 3)) * swordPrice,
        result += (Math.floor(lostFLight / 6)) * shieldPrice,
        result += (Math.floor(lostFLight / 12)) * armorPrice;

    console.log(`Gladiator expenses: ${result.toFixed(2)} aureus`)
}

gladiatorExpenses(7, 2, 3, 4, 5)