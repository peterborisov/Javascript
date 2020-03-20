function constructionCrew(args) {
    if (args.dizziness === true) {
        args.levelOfHydrated += 0.1 * args.experience * args.weight;
        args.dizziness = false;
    }
    return args;
}

console.log(constructionCrew(
    {
        weight: 80,
        experience: 1,
        levelOfHydrated: 0,
        dizziness: true
    }
));