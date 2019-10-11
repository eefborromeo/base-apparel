let form = document.getElementsByTagName('form')[0];
let email = document.getElementById('email');
let errorMessage = document.createElement('p');
errorMessage.classList.add('error-message');
errorMessage.innerHTML = 'Please provide a valid email';

let emailCheck = () => {
    if (email.validity.valueMissing && !email.validity.valid || !email.validity.valueMissing && email.validity.valid) {
        email.classList.add('valid');
        email.classList.remove('invalid');
        form.parentNode.removeChild(errorMessage);
    } else if (!email.validity.valueMissing && !email.validity.valid) {
        email.classList.add('invalid');
        email.classList.remove('valid');
        form.parentNode.appendChild(errorMessage);
    }
}