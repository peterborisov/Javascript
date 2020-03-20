function solve() {
    let departButton = document.getElementById('depart'),
        arriveButton = document.getElementById('arrive'),
        info = document.getElementsByClassName('info')[0],
        nextStop = 'depot',
        url = `https://judgetests.firebaseio.com/schedule/${nextStop}.json`,
        currentStop = '';

    function depart() {
        fetch(url)
            .then(res => res.json())
            .then(action)

        function action({ name, next }) {
            nextStop = next;
            currentStop = name;
            info.textContent = `Next stop ${name}`;
            departButton.disabled = true;
            arriveButton.disabled = false;
        }
    }

    function arrive() {
        info.textContent = `Arriving at ${currentStop}`;
        currentStop = nextStop;
        departButton.disabled = false;
        arriveButton.disabled = true;
    }
    return {
        depart,
        arrive
    };
}

let result = solve();