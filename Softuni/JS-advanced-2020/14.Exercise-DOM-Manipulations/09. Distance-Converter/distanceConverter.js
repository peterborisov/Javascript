function attachEventsListeners() {
    let inputDistance = document.getElementById('inputDistance'),
        outputDistance = document.getElementById('outputDistance'),
        inputOption = document.getElementById('inputUnits'),
        outputOption = document.getElementById('outputUnits'),
        convert = document.getElementById('convert');

    let units = {
        'Kilometers': 1000,
        'Meters': 1,
        'Centimeters': 0.01,
        'Millimeters': 0.001,
        'Miles': 1609.34,
        'Yards': 0.9144,
        'Feet': 0.3048,
        'Inches': 0.0254
    }

    convert.addEventListener('click', () => {
        let from = inputOption.options[inputOption.selectedIndex].innerHTML,
            to = outputOption.options[outputOption.selectedIndex].innerHTML,
            result = (inputDistance.value * units[from]) / units[to];
        outputDistance.value = result;
    })
}