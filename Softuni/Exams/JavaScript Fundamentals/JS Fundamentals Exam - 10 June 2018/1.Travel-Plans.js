function travelPlan(args) {
    let totalAmount = 0;
    let professions = {
        Specialized: ['Programming', 'Hardware maintenance', 'Cooking', 'Translating', 'Designing'],
        Average: ['Driving', 'Managing', 'Fishing', 'Gardening'],
        Clumsy: ['Singing', 'Accounting', 'Teaching', 'Exam-Making', 'Acting', 'Writing', 'Lecturing', 'Modeling', 'Nursing']
    }
    for (el of args) {
        el = el.split(' : ');
        let [profession, gold] = el;
        gold = Number(gold);
        for ([key, value] of Object.entries(professions)) {
            if (value.includes(profession)) {
                switch (key) {
                    case 'Specialized':
                        if (gold >= 200) {
                            totalAmount += (gold) + 100;
                        }
                        break;
                    case 'Average':
                        totalAmount += gold - (20 / 100) * gold;
                        break;
                        case 'Clumsy':
                            totalAmount += gold - (5 / 100) * gold;
                        break;
                }
            }
        }
    }
    console.log(`Final sum: ${totalAmount.toFixed(2)}`);
    totalAmount < 1000 ? console.log(`Mariyka need to earn ${(1000 - totalAmount).toFixed(2)} gold more to continue in the next task.`)
     :console.log(`Mariyka earned ${(totalAmount - 1000).toFixed(2)} gold more.`);
}

travelPlan(
    ["Programming : 500",
        "Driving : 243.55",
        "Acting : 200",
        "Singing : 100",
        "Cooking : 199",
        "Hardware maintenance : 800",
        "Gardening : 700",
        "Programming : 500"]
)