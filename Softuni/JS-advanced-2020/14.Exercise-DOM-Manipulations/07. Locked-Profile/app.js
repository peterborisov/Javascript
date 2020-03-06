function lockedProfile() {
    let buttons = [...document.querySelectorAll('button')];

    buttons.forEach(button => button.addEventListener('click', (e) => {
        let button = e.target,
            profile = button.parentNode,
            radio = profile.querySelector('input[type=radio]');

        if (!radio.checked) {
            let details = profile.querySelector('div');
            if (button.innerHTML === 'Show more') {
                details.style.display = 'block';
                button.innerHTML = 'Hide it';
            } else {
                details.style.display = 'none';
                button.innerHTML = 'Show more';
            }
        }
    }));
}