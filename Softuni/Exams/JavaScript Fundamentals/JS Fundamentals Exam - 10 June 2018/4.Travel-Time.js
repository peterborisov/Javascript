function travelTime(args) {
    let map = new Map();
    for (el of args) {
        let [country, town, cost] = el.split(' > ');
        town = town.charAt(0).toUpperCase() + town.slice(1)
        if (!map.has(country)) {
            map.set(country, new Map());
        }

        if (!map.get(country).has(town)) {
            map.get(country).set(town, cost)
        }

        if (map.get(country).get(town)) {
            if (map.get(country).get(town, cost) > cost) {
                map.get(country).set(town, cost)
            }
        }
    }

    let sortedMap = [...map].sort();

    for ([key, value] of sortedMap) {
        console.log(key, value);
    }
}

travelTime(
    [
        "Bulgaria > sofia > 500",
        "Bulgaria > Sopot > 800",
        "France > Paris > 2000",
        "Albania > Tirana > 1000",
        "Bulgaria > Sofia > 200"]
)