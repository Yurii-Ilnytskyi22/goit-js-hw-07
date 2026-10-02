const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const data = {};

  const email = formData.get('email').trim();
  const password = formData.get('password').trim();

  if (!email || !password) {
    alert('All form fields must be filled in');
    return;
  }

  data.email = email;
  data.password = password;

  console.log(data);
  loginForm.reset();
});
