import throttle from 'lodash.throttle';

const email = document.querySelector('input');
const message = document.querySelector('textarea');
const form = document.querySelector('form');
let STORAGE_KEY = 'feedback-form-state';
let storage = {};

const fillForm = () => {
  const dataLocal = localStorage.getItem(STORAGE_KEY);
  if (dataLocal) {
    storage = JSON.parse(dataLocal);
  } else {
    storage = {
      email: '',
      message: '',
    };
  }
  email.value = storage.email;
  message.innerHTML = storage.message;
};

fillForm();

const addToLocalStorage = throttle(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(storage));
}, 500);

email.addEventListener('input', e => {
  storage.email = e.target.value;
  addToLocalStorage();
});

message.addEventListener('input', e => {
  storage.message = e.target.value;
  addToLocalStorage();
});

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(storage);
  email.value = '';
  message.value = '';
  storage = {
    email: '',
    message: '',
  };
  addToLocalStorage();
});
