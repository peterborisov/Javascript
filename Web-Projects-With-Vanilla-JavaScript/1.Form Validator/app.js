function submitForm() {
    let form = document.getElementById('form'),
        inputs = form.querySelectorAll('input');

    let errorClass = (el, message) => {
        const formControl = el.parentElement;
        formControl.className = 'form-control error';
        const small = formControl.querySelector('small');
        small.innerText = message;
    }

    let successClass = (el) => {
        const formControl = el.parentElement;
        formControl.className = 'form-control success';
    }

    let isValidEmail = (el) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(el.value.trim())) {
            successClass(el);
        } else {
            errorClass(el, 'Email is not valid');
        }
    }

    let isRequired = (arr) => {
        arr.forEach((el) => {
            if (input.value.trim() === '') {
                errorClass(el, `${setFieldName(el)} is required`);
            } else {
                successClass(el);
            }
        });
    }

    let checkLength = (el, min, max) => {
        if (el.value.length < min) {
            errorClass(el, `${setFieldName(el)} must be at least ${min} characters`);
        } else if (el.value.length > max) {
            errorClass(el, `${setFieldName(el)} must be less than ${max} characters`);
        } else {
            successClass(el);
        }
    }

    let isPasswordsMatch = (pass, confirmPass) => {
        if (pass.value !== confirmPass.value) {
            errorClass(confirmPass, 'Passwords do not match');
        }
    }

    let setFieldName = (el) => {
        return el.id.charAt(0).toUpperCase() + el.id.slice(1);
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        isRequired([inputs[0], inputs[1], inputs[2], inputs[3]]);
        checkLength(inputs[0], 3, 15);
        checkLength(inputs[2], 6, 25);
        isValidEmail(inputs[1]);
        isPasswordsMatch(inputs[2], inputs[3]);
    });
}

document.addEventListener('DOMContentLoaded', submitForm())
