import throttle from 'lodash.throttle';

const throttle = require('lodash.throttle');
const LOCALSTORAGE_KEY = "feedback-form-state";

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input[name="email"]'),
    message: document.querySelector('textarea[name="message"]'),
}

populateFormOutput();
const savedText = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};


refs.form.addEventListener('input', throttle(handlerFormOutput, 500));

function handlerFormOutput(event) {
    const formData = savedText;
    formData[event.target.name] = event.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));

}

refs.form.addEventListener('submit', formResult);
function formResult(evt) {
    evt.preventDefault();
    if (refs.email.value === '' || refs.message.value === '') {
        return alert('Please fill in all the fields!');
    }
    console.log("Form data: ", savedText);
    localStorage.removeItem(LOCALSTORAGE_KEY);
    refs.form.reset();   
}

function populateFormOutput() {

    if (savedText) {
        refs.email.value = savedText.email  || "";
        refs.message.value = savedText.message || "";
    };
}