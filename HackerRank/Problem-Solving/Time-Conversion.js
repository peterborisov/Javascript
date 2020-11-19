function timeConversion(s) {
    const time = s.slice(0, 8).split(':');
    time[0] = (s.indexOf('PM') > -1) ?
        (time[0] === 12 ? '12' : +(time[0]) + 12) :
        (time[0] === 12 ? '00' : time[0]);
    return time.join(':');
}
console.log(timeConversion('07:05:45PM'))
