function attachGradientEvents(e) {
    let gradient = document.getElementById('gradient');
    let result = document.getElementById('result');
    gradient.addEventListener('mousemove', gradientMove);

    function gradientMove(e) {
        let x = e.offsetX / (e.target.clientWidth - 1);
        x = Math.floor(x * 100);
        result.innerHTML = `${x}%`;
    }
}