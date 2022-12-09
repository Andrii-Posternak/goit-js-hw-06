const inputRef = document.querySelector('input#name-input');
const outputRef = document.querySelector('span#name-output');

const getInputValue = event => {
  const defaultValue = 'Anonymous111';
  if (event.currentTarget.value === '') {
    outputRef.textContent = defaultValue;
  }
  outputRef.textContent = event.currentTarget.value;
};

inputRef.addEventListener('input', getInputValue);
