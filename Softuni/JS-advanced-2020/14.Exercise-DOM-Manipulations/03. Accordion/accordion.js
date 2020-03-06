function toggle() {
    let extra = document.getElementById('extra');
    let button = document.getElementsByClassName('button')[0];
    if (button.textContent === "More") {
        extra.style.display = "block";
        document.querySelector('.button').innerText = 'Less';
    } else {
        extra.style.display = "none";
        document.querySelector('.button').innerText = 'More';
    }
}