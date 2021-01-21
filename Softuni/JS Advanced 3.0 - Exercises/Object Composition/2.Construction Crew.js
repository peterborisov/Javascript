function constructionCrew(worker) {
    let calculateBlood = () => {
        worker.bloodAlcoholLevel += 0.1 * worker.weight * worker.experience;
        worker.handsShaking = false;
    }
    worker.handsShaking ? calculateBlood() : '';
    return worker;
}

console.log(constructionCrew(
    {
        weight: 80,
        experience: 1,
        bloodAlcoholLevel: 0,
        handsShaking: true
    }
))