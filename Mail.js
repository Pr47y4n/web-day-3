const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');

form.addEventListener('submit', function(event) {
    let isValid = true;


    nameError.textContent = '';
    emailError.textContent = '';

   
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
        isValid = false;
    }else if (/\d/.test(nameInput.value.trim())) { 
        nameError.textContent = 'Name cannot contain numbers';
        isValid = false;
    }


    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required';
        isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        emailError.textContent = 'Invalid email format';
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
});


function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
