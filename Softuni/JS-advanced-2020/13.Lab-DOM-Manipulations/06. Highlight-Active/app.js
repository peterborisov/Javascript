function focus() {
    let inputItem = document.getElementsByTagName('input');
    for (el of inputItem) {
        el.addEventListener('focus', (e) => {
            e.target.parentNode.className = 'focused';
        });

        el.addEventListener('blur', (e) => {
            e.target.parentNode.className = '';
        });
    }
}