function test() {
    var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    var email = document.getElementById('email');
    if (regexEmail.test(email.value)) {
      document.getElementById('email').style.backgroundColor='#99C262';
    } else {
        document.getElementById('email').style.backgroundColor='red';
    }
}