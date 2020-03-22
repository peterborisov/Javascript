function trucks(args) {
    let obj = {};
    let backupTyres = [];

    for (truck of args) {
        let command = truck[0];
        switch (command) {
            case "NEWTRUCK":
                if (!obj[truck[1]]) {
                    obj[truck[1]] = {
                        tyres: truck[2],
                        'distance': 0
                    }
                }
                break;
            case "NEWTIRES":
                backupTyres.push(truck[1]);
                break;
            case "WORK":
                obj[truck[1]].distance += truck[2];
                break;
        }
    }
    for (let [key, value] of Object.entries(obj)) {
        console.log(`Truck ${key} has traveled ${value.distance}.`);
      }
}

trucks(
    [
        ["NEWTRUCK", "C1111AA", [7, 7, 7, 7, 7, 7, 7, 7]],
        ["NEWTRUCK", "C2222AA", [5, 5, 5, 5, 5, 5, 5, 5]],
        ["NEWTIRES", [8, 8, 8, 8, 8, 8, 8, 8]],
        ["NEWTIRES", [4, 4, 4, 4, 4, 4, 4, 4]],
        ["NEWTIRES", [5, 5, 5, 5, 5, 5, 5, 5]],
        ["WORK", "C1111AA", 7700],
        ["WORK", "C2222AA", 6000],
        ["WORK", "C1111AA", 3000],
    ]
)