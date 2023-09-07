import throttle from 'lodash.throttle';

const throttle = require('lodash.throttle');
const LOCALSTORAGE_KEY = "feedback-form-state";

const refs = {
    form: document.querySelector(".feedback-form"),
    email: document.querySelector("input"),
    message: document.querySelector("textarea"),
}

populateFormOutput();
const formData = {};

refs.form.addEventListener('input', throttle(handlerFormOutput, 500));

function handlerFormOutput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
    console.log(formData);
}

refs.form.addEventListener('submit', evt => {
    evt.preventDefault();
    localStorage.removeItem(LOCALSTORAGE_KEY);

    if (refs.email.value === '' || refs.message.value === '') {
        return alert('Please fill in all the fields!');
    }

    refs.form.reset();
    console.log(formData);
})

function populateFormOutput() {
    const savedText = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    if (savedText) {
        refs.email.value = savedText.email;
        refs.message.value = savedText.message;
    }
}