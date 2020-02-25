function systemComponents(args) {
    let map = new Map();
    
    for (el of args) {
        let [systemName, componentName, subComponent] = el.split(' | ');

        if (!map.has(systemName)) {
            map.set(systemName, new Map());
        }

        let sybComponents = map.get(systemName).get(componentName);

        if (!map.get(systemName).get(componentName)) {
            map.get(systemName).set(componentName, []);
            sybComponents = map.get(systemName).get(componentName);
        }

        sybComponents.push(subComponent);

    }
    for (let [systemName] of map) {
        console.log(`${systemName}`);
        for (let [componentName, subComponent] of map.get(systemName)) {
            console.log(`|||${componentName.trim()}`);
            for (c of subComponent) {
                console.log(`||||||${c.trim()}`);
            }
        }
    }
};

systemComponents(
    ['SULS | Main Site | Home Page',
        'SULS | Main Site | Login Page',
        'SULS | Main Site | Register Page',
        'SULS | Judge Site | Login Page',
        'SULS | Judge Site | Submittion Page',
        'Lambda | CoreA | A23',
        'SULS | Digital Site | Login Page',
        'Lambda | CoreB | B24',
        'Lambda | CoreA | A24',
        'Lambda | CoreA | A25',
        'Lambda | CoreC | C4',
        'Indice | Session | Default Storage',
        'Indice | Session | Default Security']
);