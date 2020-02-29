function personalBMI(...args) {
    let bmi = args[2] / (args[3] / 100 * args[3] / 100);
    let bmiStatus =
        bmi < 18.5 ? 'underweight' :
        bmi < 25 ? 'normal' :
        bmi < 30 ? 'overweight' : 'obese';

    let person = {
        "name": args[0],
        "personalInfo": {
            "age": args[1],
            "weight": args[2],
            "height": args[3]
        },
        "BMI": Math.round(bmi),
        "status": bmiStatus
    }

    if(bmiStatus === 'obese'){
        person.recommendation = "admission required";
    }

    return person;
}

personalBMI(
    "Peter", 9, 175, 182
);

// { name: 'Peter',
//   personalInfo: {
//     age: 29,
//     weight: 75,
//     height: 182
//   }
//   BMI: 23
//   status: 'normal' }