// Given a year, return the century it is in. 
// The first century spans from the year 1 up to and including the year 100, 
// the second - from the year 101 up to and including the year 200, etc.

function centuryFromYear(year) {
    let century;
    if (year % 100 === 0) {
        century = year / 100
    } else if (year % 100 >= 50) {
        century = Math.ceil(year / 100);
    } else if (year % 100 < 50) {
        century = Math.floor(year / 100) + 1;
    } else {
        century = year / 100;
    }
    return century;
}
