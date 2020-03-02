function stopwatch() {

    let time = document.getElementById('time'),
        start = document.getElementById('startBtn'),
        stop = document.getElementById('stopBtn'),
        seconds = 0, 
        minutes = 0, 
        t;

    function add() {
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
            }
        }

        time.textContent =
            (minutes ? (minutes > 9 ? minutes : "0" + minutes)
                : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

        timer();
    }

    function timer() {
        t = setTimeout(add, 1000);
    }

    /* Start */
    start.onclick = function () {
        timer();
        start.disabled = true;
        stop.disabled = false;
    };

    /* Stop */
    stop.onclick = function () {
        clearInterval(t);
        seconds = 0;
        start.disabled = false;
        stop.disabled = true;
    }
}