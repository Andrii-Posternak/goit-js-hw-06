const inputRef = document.querySelector('#validation-input');

const getInputCount = () => {
  if (inputRef.value.length !== +inputRef.getAttribute('data-length')) {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  } else {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  }
};

inputRef.addEventListener('blur', getInputCount);
