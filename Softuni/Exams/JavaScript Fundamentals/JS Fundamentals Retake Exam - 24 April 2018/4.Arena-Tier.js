function arenaTier(args) {
    let map = new Map();
    for (el of args) {
        el = el.split(' ')
        if (el[1] === '->') {
            let [name, , tech, , skill] = el;
            if (!map.has(name)) {
                map.set(name, new Map());
            }
            if (!map.get(name).has(tech)) {
                map.get(name).set(tech, skill);
            }
        } else if (el[1] === 'vs') {
            let [first, , second] = el;
            if (map.has(first) && map.has(second)) {
                for ([key, value] of map.get(first)) {
                    for ([innerKey, innerValue] of map.get(second)) {
                        if (key === innerKey) {
                            value < innerValue ? map.delete(first) : map.delete(second);
                        }
                    }
                }
            }
        }
    }

    let sortedMap = [...map].sort();
    for ([key, value] of sortedMap) {
        let totalSum = 0;
        value.forEach(item => { totalSum += Number(item) });
        console.log(`${key}: ${totalSum} skill`);
        for ([innerKey, innerValue] of value) {
            console.log(`- ${innerKey} <!> ${innerValue}`);
        }
    }
}

arenaTier(
    [
        'Pesho -> Duck -> 400',
        'Julius -> Shield -> 150',
        'Gladius -> Heal -> 200',
        'Gladius -> Support -> 250',
        'Gladius -> Shield -> 250',
        'Pesho vs Gladius',
        'Gladius vs Julius',
        'Gladius vs Gosho',
        'Ave Cesar'
    ]
);