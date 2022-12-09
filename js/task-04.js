const refs = {
  decrementBtnRef: document.querySelector('[data-action="decrement"]'),
  incrementBtnRef: document.querySelector('[data-action="increment"]'),
  valueRef: document.querySelector('#value'),
};

let counterValue = 0;

const addDecrement = () => {
  counterValue -= 1;
  refs.valueRef.textContent = counterValue;
};

const addIncrement = () => {
  counterValue += 1;
  refs.valueRef.textContent = counterValue;
};

refs.decrementBtnRef.addEventListener('click', addDecrement);
refs.incrementBtnRef.addEventListener('click', addIncrement);
