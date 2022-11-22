const form = document.getElementById('form');

const email = document.getElementById('email');
const country = document.getElementById('country');
const zipcode = document.getElementById('zipcode');

const password = document.getElementById('password');
const password2 = document.getElementById('confirmpassword');


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





const validateInputs = () => {
    const emailValue = email.value.trim();
    const countryValue = country.value.trim();
    const zipcodeValue = zipcode.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!ValidateEmail(emailValue)){
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(countryValue === '') {
        setError(country, 'Country is required');
    } else {
        setSuccess(country);
    }

    if(zipcodeValue === '') {
        setError(zipcode, 'Zipcode is required');
    } else if (typeof Number(zipcodeValue) !== 'number'){
        setError(zipcode, 'Provide a valid Zipcode');
    } else {
        setSuccess(zipcode);
    }

   
    if(passwordValue === '') {
        setError(password, 'password is required');
    } else if (passwordValue.length < 8){
        setError(password, 'password must be at least 8 character');
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'password is required');
    } else if (password2Value !== passwordValue){
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }


}

