function getInfo() {
    let stopId = document.getElementById('stopId');
    let stopName = document.getElementById('stopName');
    let buses = document.getElementById('buses');
    let url = `https://judgetests.firebaseio.com/businfo/${stopId.value}.json`;
    buses.innerHTML = '';
    stopName.textContent = '';
    fetch(url)
        .then(res => res.json())
        .then(data => {
            stopName.textContent = data.name;
            for (let key in data.buses) {
                let value = data.buses[key];
                let li = document.createElement('li');
                li.innerHTML = `Bus ${key} arrives in ${value}`;
                buses.appendChild(li);
            }
        })
        .catch(() => {
            stopName.textContent = 'Greshka moj';
        })
}
