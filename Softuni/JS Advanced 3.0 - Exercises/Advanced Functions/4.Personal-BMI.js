function personalBMI(...args) {
    let [name, age, weight, height] = args;
    let obj = {
        name,
        personalInfo: {
            age,
            weight,
            height
        },
        BMI: Math.round(weight / (height * height / 10000)),
    }
    obj['status'] = obj.BMI < 18.5 ? 'underweight' : obj.BMI < 25 ?
    'normal' : obj.BMI < 30 ? 'overweight' : 'obese';

    obj.status === 'obese' ? obj['recommendation'] = 'admission required' : '';
    
    return obj;
}

console.log(personalBMI('Peter', 29, 75, 82))