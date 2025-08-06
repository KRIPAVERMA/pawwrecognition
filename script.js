const signInBtn = document.getElementById('signInBtn');
const signUpBtn = document.getElementById('signUpBtn');

const signInForm = document.getElementById('sign-in-form');
const signUpForm = document.getElementById('sign-up-form');

signInBtn.addEventListener('click', () => {
  signInForm.classList.remove('hidden');
  signUpForm.classList.add('hidden');
});

signUpBtn.addEventListener('click', () => {
  signUpForm.classList.remove('hidden');
  signInForm.classList.add('hidden');
});
