function attachEventsListeners() {
    let buttons = document.querySelectorAll('input[type=button]');
    for (button of buttons) {
        button.addEventListener('click', (e) => {
            let ddHhMmSs = e.target.parentElement.children[1].id, //<input type="text" id="????">
                value = e.target.parentElement.children[1].value,
                seconds = 0;

            switch (ddHhMmSs) {
                case 'days':
                    seconds = value * 24 * 60 * 60;
                    break;
                case 'hours':
                    seconds = value * 60 * 60;
                    break;
                case 'minutes':
                    seconds = value * 60;
                    break;
                case 'seconds':
                    seconds = value;
                    break;
            }
            // 50/100 solution with ternary, but no break and override value. 
            // ddHhMmSs === 'days' ? seconds = value * 24 * 60 * 60:
            //     'hours' ? seconds = value * 60 * 60 :
            //         'minutes' ? seconds = value * 60 :
            //             'seconds' ? seconds = value : '';

            document.getElementById("days").value = seconds / 60 / 60 / 24;
            document.getElementById("hours").value = seconds / 60 / 60;
            document.getElementById("minutes").value = seconds / 60;
            document.getElementById("seconds").value = seconds;
        });
    }
}