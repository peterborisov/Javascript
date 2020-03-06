function encodeAndDecodeMessages() {
    let buttons = [...document.querySelectorAll('button')],
        textareas = [...document.querySelectorAll('textarea')],
        arr = '',
        arrASCII = [],
        arrChar = [];

    buttons.forEach(button => button.addEventListener('click', (e) => {
        if (e.target.innerHTML === 'Encode and send it') {
            arr = textareas[0].value;

            for (el of textareas[0].value) {
                arrASCII.push(el.charCodeAt(0) + 1);
            }
            for (el of arrASCII) {
                arrChar.push(String.fromCharCode(el));
            }

            textareas[1].value = arrChar.join('');
            textareas[0].value = '';
        }

        if (e.target.innerHTML === 'Decode and read it') {
            textareas[1].value = arr;
        }
    }));
}