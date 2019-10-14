let form = document.getElementsByTagName('form')[0];
let email = document.getElementById('email');
let errorMessage = document.createElement('p');
errorMessage.classList.add('error-message');
errorMessage.innerHTML = 'Please provide a valid email';

let resetForm = () => {
    if (email.value === "" || email.validity.valid) {
        email.classList.remove('invalid');
        email.classList.add('valid');
        form.parentNode.removeChild(errorMessage);
    } 
}

let submitCheck = () => {
    if (email.validity.valueMissing && !email.validity.valid || !email.validity.valueMissing && !email.validity.valid) {
        email.classList.add('invalid');
        email.classList.remove('valid');
        form.parentNode.appendChild(errorMessage);
    } else {
        email.classList.add('valid');
        email.classList.remove('invalid');
        form.parentNode.removeChild(errorMessage);
        form.removeAttribute("novalidate");
    }
}

email.addEventListener("keyup", (e) => { 
    e.preventDefault();
    resetForm();
})

form.addEventListener("submit", (e) => {
    submitCheck();
    e.preventDefault();
})
