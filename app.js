let form = document.getElementsByTagName('form')[0];
let email = document.getElementById('email');
let errorMessage = document.createElement('p');
errorMessage.classList.add('error-message');
errorMessage.innerHTML = 'Please provide a valid email';