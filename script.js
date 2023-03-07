const input = document.getElementById('input');
const submitButton = document.getElementById('submit');
const form = document.getElementById('form');

const validateEmail = (input) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(input).toLowerCase());
    // this returns true or false
    }

form.addEventListener('submit', (e)=>{
    const email = input.value;
    e.preventDefault();
    if (!validateEmail(email)) {
        alert('invalid');
    } else {
        window.location.reload();
    }
});