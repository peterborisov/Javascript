function gameOfEpic(kingdoms, battles) {
    let map = new Map();
    for (kingdom of kingdoms) {
        if (!map.has(kingdom.kingdom)) {
            map.set(kingdom.kingdom, new Map())
        }
        if (!map.get(kingdom.kingdom).has(kingdom.general)) {
            map.get(kingdom.kingdom).set(kingdom.general, 0)
        }
        map.get(kingdom.kingdom).set(kingdom.general,
            map.get(kingdom.kingdom).get(kingdom.general) + kingdom.army);
    }

    for(kingdom of battles){
        let[attackingKingdom,
            ttackingGeneral, 
            defendingKingdom, 
            defendingGeneral] = kingdom;
        console.log(attackingKingdom);
        
    }
    // console.log(map)
}

gameOfEpic([
    { kingdom: "Maiden Way", general: "Merek", army: 5000 },
    { kingdom: "Stonegate", general: "Ulric", army: 4900 },
    { kingdom: "Stonegate", general: "Doran", army: 70000 },
    { kingdom: "YorkenShire", general: "Quinn", army: 0 },
    { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
    { kingdom: "Maiden Way", general: "Berinon", army: 100000 }],
    [["YorkenShire", "Quinn", "Stonegate", "Ulric"],
    ["Stonegate", "Ulric", "Stonegate", "Doran"],
    ["Stonegate", "Doran", "Maiden Way", "Merek"],
    ["Stonegate", "Ulric", "Maiden Way", "Merek"],
    ["Maiden Way", "Berinon", "Stonegate", "Ulric"]])