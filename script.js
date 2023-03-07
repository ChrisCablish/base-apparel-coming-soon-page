const input = document.getElementById('input');
const submitButton = document.getElementById('submit');
const form = document.getElementById('form');
const alertIcon = document.getElementById('alert__icon');
const alertMessage = document.getElementById('alert__message');

const validateEmail = (input) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(input).toLowerCase());
    }

form.addEventListener('submit', (e)=>{
    const email = input.value;
    e.preventDefault();
    if (!validateEmail(email)) {
        alertIcon.style.display = 'block';
        alertMessage.style.opacity = '1';
        input.value = "";
    } else {
        window.location.reload();
    }
});