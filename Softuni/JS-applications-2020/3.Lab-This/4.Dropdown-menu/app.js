function solve() {
    let dropdown = document.getElementById('dropdown'),
        dropdownUl = document.getElementById('dropdown-ul'),
        liColection = dropdownUl.querySelectorAll('li'),
        box = document.getElementById('box'),
        bgColor = '';

    dropdown.onclick = () => {
        dropdownUl.classList.toggle('active');
        if(!dropdownUl.classList.contains('active')){
            box.style.backgroundColor = 'rgb(114, 112, 112)';
        }
    }

    liColection.forEach(el => {
        el.addEventListener('click', event => {
            bgColor = event.target.innerHTML;
            box.style.backgroundColor = bgColor;
        });

    });
}