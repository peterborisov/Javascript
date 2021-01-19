function personalBMI(...args){
    let obj = {
        name: args[0],
        personalInfo : {
            age: args[1],
            weight: args[2],
            height: args[3]     
        },
        BMI: args[2] / Math.sqrt(args[3]/ 100),
        status: 'normal'
    }

    return obj;
}

console.log(personalBMI('Peter', 29, 75, 182))