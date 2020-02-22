// Write a function that calculates how long it takes a student to get to university. 
// The function takes three numbers:
//     • The first is the number of steps the student takes from their home to the university
//     • Тhe second number is the length of the student's footprint in meters
//     • Тhe third number is the student speed in km/h
// Every 500 meters the students a rest and takes a 1 minute break.
// Calculate how long the student walks from home to university and print on the console the result in the following format: 'hours:minutes:seconds'.
// The input comes as three numbers.
// The output should be printed on the console.

function timeToWalk(...args) {

    let km = (args[0] * args[1])/1000;
    let rest = (Math.floor(km * 2) * 60);
    let seconds = (km/args[2] * 3600) + rest;
    
    let h = Math.floor(seconds / 3600);
    let m = Math.floor(seconds % 3600 / 60);
    let s = Math.round(seconds % 3600 % 60);

    let hDisplay = h > 0 ? h + ':' : "00:";
    let mDisplay = m > 0 ? m + ':' : "00:";
    let sDisplay = s > 0 ? s : "00";

    console.log(hDisplay + mDisplay + sDisplay )
}

timeToWalk(2564, 0.70, 5.5);