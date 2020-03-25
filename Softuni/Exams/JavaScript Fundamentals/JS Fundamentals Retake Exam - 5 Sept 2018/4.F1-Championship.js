function champion(args) {
    let map = new Map();

    for (el of args) {
        el = el.split(' -> ');
        let [team, pilot, points] = el;
        if (!map.has(team)) {
            map.set(team, new Map());
        }
        if (!map.get(team).has(pilot)) {
            map.get(team).set(pilot, Number(points));
        }
    }

    for ([team] of map) {
        console.log(`${team}: ${0}`);
        for ([pilot, points] of map.get(team)) {
            console.log(`-- ${pilot} -> ${points}`);
        }
    }
}

champion(
    ["Ferrari -> Kimi Raikonnen -> 25",
        "Ferrari -> Sebastian Vettel -> 18",
        "Mercedes -> Lewis Hamilton -> 10",
        "Mercedes -> Valteri Bottas -> 8",
        "Red Bull -> Max Verstapen -> 6",
        "Red Bull -> Daniel Ricciardo -> 4"]
)