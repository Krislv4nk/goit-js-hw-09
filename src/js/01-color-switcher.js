// let intervalId = null;

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
// }

// document.querySelector('[data-start]').addEventListener('click', () => {
//   document.querySelector('[data-start]').disabled = true;
//   intervalId = setInterval(() => {
//     document.body.style.backgroundColor = getRandomHexColor();
//   }, 1000);
// });

// document.querySelector('[data-stop]').addEventListener('click', () => {
//   document.querySelector('[data-start]').disabled = false;
//   clearInterval(intervalId);
// });

let intervalId = null;
const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

function disableStartButton() {
  startButton.disabled = true;
  stopButton.disabled = false;
}

function enableStartButton() {
  startButton.disabled = false;
  stopButton.disabled = true;
}

startButton.addEventListener('click', () => {
  disableStartButton();
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

stopButton.addEventListener('click', () => {
  clearInterval(intervalId);
  enableStartButton();
});


enableStartButton();