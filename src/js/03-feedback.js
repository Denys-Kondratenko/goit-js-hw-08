import throttle from 'lodash.throttle';

const formFeedback = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form [name="email"]');
const message = document.querySelector('.feedback-form [name="message"]');

let formData = {};

function setFeedback(e) {
  formData[e.target.name] = e.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

formFeedback.addEventListener(
  'input',
  throttle(e => {
    setFeedback(e);
  }, 500)
);

function getFeedback() {
  const savedFeedback = localStorage.getItem('feedback-form-state');
  if (savedFeedback) {
    const parsedFeedback = JSON.parse(savedFeedback);

    formData = parsedFeedback;

    email.value = parsedFeedback.email || '';
    message.value = parsedFeedback.message || '';
  }
}

formFeedback.addEventListener('submit', e => {
  e.preventDefault();
  console.log('submit');
  console.log(formData);

  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
});

getFeedback();
