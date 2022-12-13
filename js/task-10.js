// Напиши скрипт створення і очищення колекції елементів.Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція.Натисненням на кнопку Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// 1) Розміри найпершого <div> - 30px на 30px.
// 2) Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// 3) Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

//Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const inputValueRef = document.querySelector('#controls > input');
const createButtonRef = document.querySelector('[data-create]');
const destroyButtonRef = document.querySelector('[data-destroy]');
const boxRef = document.querySelector('div#boxes');

inputValueRef.addEventListener('input', getInputvalue);
createButtonRef.addEventListener('click', createBoxes);
destroyButtonRef.addEventListener('click', destroyBoxes);

function getInputvalue(event) {
  console.log(event.currentTarget.value);
}

function createBoxes(event) {
  const markup = `<div></div>`;
  boxRef.insertAdjacentHTML('beforeend', markup);
}

function destroyBoxes() {
  refs.boxRef.innerHTML = '';
}

// function createBoxes(event) {
//   console.log(`inputvalue: `, event.currentTarget.value);
// }

// function destroyBoxes() {
//   refs.boxRef.innerHTML = '';
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const amount = refs.inputValueRef.value;
// const amount = 4;
// let sum = 0;
// console.log(amount);
// function createBoxes(amount) {
//   for (let i = 1; i <= amount; i += 1) {}
// }
// for (let i = 1; i <= amount; i += 1) {
//   let innerDiv = document.createElement('div');
//   let widthDiv = 30;
//   let heigthDiv = 30;
//   innerDiv.style.width = widthDiv;
//   innerDiv.style.heigth = heigthDiv;
//   console.log(innerDiv);
// }
// let innerDiv = document.createElement('div');
// let widthDiv = 30;
// let heightDiv = 30;
// innerDiv.style.color = 'red';
// innerDiv.style.heighth = '30px';
// console.log(innerDiv);
