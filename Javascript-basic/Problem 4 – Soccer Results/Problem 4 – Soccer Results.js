function solve(arr) {
    var result = {};
    var match, homeTeam, awayTeam, score, homeTeamGoals, awayTeamGoals;
    var splitPattern = / *\/ *|: */g;
    for (var i = 0; i < arr.length; i++) {
        var matchParameters = arr[i].split(splitPattern);
        homeTeam = matchParameters[0];
        awayTeam = matchParameters[1];
        score = matchParameters[2].split(RegExp(' *- *'));
        homeTeamGoals = Number(score[0]);
        awayTeamGoals = Number(score[1]);


        if (!result[homeTeam]) {
            result[homeTeam] = {
                goalsScored: 0,
                goalsConceded: 0,
                matchesPlayedWith: []
            };
        }
        result[homeTeam]['goalsScored'] += homeTeamGoals;
        result[homeTeam]['goalsConceded'] += awayTeamGoals;

        if (result[homeTeam]['matchesPlayedWith'].indexOf(awayTeam) === -1) {
            result[homeTeam]['matchesPlayedWith'].push(awayTeam);
        }

        if (!result[awayTeam]) {
            result[awayTeam] = {
                goalsScored: 0,
                goalsConceded: 0,
                matchesPlayedWith: []
            };
        }
        result[awayTeam]['goalsScored'] += awayTeamGoals;
        result[awayTeam]['goalsConceded'] += homeTeamGoals;

        if (result[awayTeam]['matchesPlayedWith'].indexOf(homeTeam) === -1) {
            result[awayTeam]['matchesPlayedWith'].push(homeTeam);
        }
    }

    var sortedResults = {};
    var orderedKeys = Object.keys(result).sort();
    for (var i = 0; i < orderedKeys.length; i++) {
        sortedResults[orderedKeys[i]] = {
            goalsScored: result[orderedKeys[i]]['goalsScored'],
            goalsConceded: result[orderedKeys[i]]['goalsConceded'],
            matchesPlayedWith: result[orderedKeys[i]]['matchesPlayedWith'].sort()
        };
    }
    console.log(JSON.stringify(sortedResults));
}
var input = [
    'Germany / Argentina: 1-0',
    'Brazil / Netherlands: 0-3',
    'Netherlands / Argentina: 0-0',
    'Brazil / Germany: 1-7',
    'Argentina / Belgium: 1-0',
    'Netherlands / Costa Rica: 0-0',
    'France / Germany: 0-1',
    'Brazil / Colombia: 2-1'
];
solve(input);
