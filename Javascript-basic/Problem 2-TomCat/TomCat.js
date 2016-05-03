function main(arr) {
    var relaxDays = (parseInt(arr[0]) * 127);
    var workingDays = (365 - (parseInt(arr[0]))) * 63;
    var totalMinutes = relaxDays + workingDays;
    if (totalMinutes > 30000) {
        totalMinutes = totalMinutes - 30000;
        console.log('Tom will run away');
        console.log(Math.floor(totalMinutes / 60) + ' hours and ' + totalMinutes % 60 + ' minutes more for play');
    } else {
        totalMinutes = 30000 - totalMinutes;
        console.log('Tom sleeps well');
        console.log(Math.floor(totalMinutes / 60) + ' hours and ' + totalMinutes % 60 + ' minutes less for play');
    }
}
var input = ['20'];
main(input);