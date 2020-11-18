let isNan = (s) => {
    try {
        console.log(parseInt(s).toString().replace('NaN', 'Bad String'));
    } catch (e) {
        console.log("Bad String");
    }
}

isNan('adasf')