function race(args) {
    let pilots = args.shift().split(' ');
    for (el of args) {
        el = el.split(' ');
        let [command, pilot] = el;
        switch (command) {
            case 'Join':
                if (!pilots.includes(pilot)) {
                    pilots.push(pilot);
                }
                break;
            case 'Crash':
                if (pilots.includes(pilot)) {
                    pilots.splice(pilots.indexOf(pilot), 1);
                }
                break;
            case 'Pit':
                if (pilots.includes(pilot)) {
                    Array.prototype.move = function (from, to) {
                        this.splice(to, 0, this.splice(from, 1)[0]);
                        return this;
                    };
                    pilots.move(pilots.indexOf(pilot), pilots.indexOf(pilot) + 1)
                }
                break;
            case 'Overtake':
                Array.prototype.move = function (from, to) {
                    this.splice(to, 0, this.splice(from, 1)[0]);
                    return this;
                };
                pilots.move(pilots.indexOf(pilot), pilots.indexOf(pilot) - 1)

                break;
        }
    }
    console.log(pilots.join(' ~ '))
}

race(
    ["Vetel Hamilton Raikonnen Botas Slavi",
        "Pit Hamilton",
        "Overtake LeClerc",
        "Join Ricardo",
        "Crash Botas",
        "Overtake Ricardo",
        "Overtake Ricardo",
        "Overtake Ricardo",
        "Crash Slavi"]
)

