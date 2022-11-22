const form = document.getElementById('form');

const email = document.getElementById('email');
const country = document.getElementById('country');
const zipcode = document.getElementById('zipcode');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


form.addEventListener('input', e => {

    
    e.preventDefault();
    validateTarget(e.target);
})


form.addEventListener('submit', e => {

    
    e.preventDefault();

    validateInputs();
})

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    return (false)
}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;

    inputControl.classList.add('error');
    inputControl.classList.remove('success');

};

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';

    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};


function validateTarget(element) {


    switch (element.id) {
        case 'email':
            validateEmail()
            break;

        case 'country':
            validateCountry()
            break;

        case 'zipcode':
            validateZipcode()
            break;

        case 'password':
            validatePassword()
            break;

        case 'password2':
            validatePassword2()
            break;
    
        default:
            break;
    }

}


function validateEmail()  {
    const emailValue = email.value.trim();
    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!ValidateEmail(emailValue)){
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email); 
    }
}

function validateCountry()  {
    const countryValue = country.value.trim();
    if(countryValue === '') {
        setError(country, 'Country is required');
    } else {
        setSuccess(country);
    }
}

function validateZipcode() {
    const zipcodeValue = zipcode.value.trim();
    if(zipcodeValue === '') {
        setError(zipcode, 'Zipcode is required');
    } else if (isNaN(zipcodeValue)){
        setError(zipcode, 'Provide a valid Zipcode');
    } else {
        setSuccess(zipcode);
    }
}


function validatePassword() {
    const passwordValue = password.value.trim();
    if(passwordValue === '') {
        setError(password, 'password is required');
    } else if (passwordValue.length < 8){
        setError(password, 'password must be at least 8 character');
    } else {
        setSuccess(password);
    }

}

function validatePassword2() {
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    if(password2Value === '') {
        setError(password2, 'password is required');
    } else if (password2Value !== passwordValue){
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }
}


const validateInputs = () => { 
    validateEmail();
    validateCountry();
    validateZipcode();
    validatePassword();
    validatePassword2();
}

