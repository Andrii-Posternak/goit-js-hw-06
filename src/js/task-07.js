const inputRef = document.querySelector('input#font-size-control');
const spanRef = document.querySelector('span#text');

inputRef.addEventListener('input', () => {
  spanRef.style.fontSize = `${inputRef.value}px`;
});
