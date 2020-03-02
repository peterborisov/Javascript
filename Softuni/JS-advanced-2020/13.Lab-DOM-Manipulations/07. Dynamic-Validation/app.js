function validate() {
    let inputItem = document.getElementById('email');
    inputItem.addEventListener('change', checker);

    function checker(e) {
        if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value))) {
            e.target.className = '';
            return;
        }
        e.target.className = 'error';
    };
}