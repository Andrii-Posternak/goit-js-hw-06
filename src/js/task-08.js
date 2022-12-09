const formRef = document.querySelector('form.login-form');

formRef.addEventListener('submit', handleSubmitForm);

function handleSubmitForm(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (email.value === '' || password.value === '') {
    return alert('All fields must be filled');
  }

  const outputData = {
    email: email.value,
    password: password.value,
  };

  console.log(outputData);
  formRef.reset();
}
