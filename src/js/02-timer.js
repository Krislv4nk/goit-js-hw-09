import Notiflix from 'notiflix';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    // onClose(selectedDates) {
    //     if (selectedDates[0] <= new Date()) {
    //       Notiflix.Notify.failure('Please choose a date in the future');
    //       document.querySelector('button[data-start]').disabled = true;
    //     } else {
    //       document.querySelector('button[data-start]').disabled = false;
    //     }
    //   },

    onClose(selectedDates) {
      const startButton = document.querySelector('button[data-start]');
      const datetimeInput = document.querySelector("#datetime-picker");
      
      if (selectedDates[0] <= new Date()) {
        Notiflix.Notify.failure('Please choose a date in the future');
        startButton.disabled = true;
        datetimeInput.disabled = false;
      } else {
        Notiflix.Notify.success('Date selected. You can start the timer now.');
        startButton.disabled = false;
        datetimeInput.disabled = true;
      }
    },
  };

  const datetimePicker = flatpickr("#datetime-picker", options);
  let countdownInterval;

  // function startTimer() {
  //   const targetDate = new Date(datetimePicker.selectedDates[0]);
  //   const timer = document.querySelector(".timer");
  //   countdownInterval = setInterval(() => {
  //     const now = new Date();
  //     const timeDifference = targetDate - now;
  //     if (timeDifference <= 0) {
  //       clearInterval(countdownInterval);
  //       timer.innerHTML = "00:00:00:00";
  //     } else {
  //       const time = convertMs(timeDifference);
  //       timer.innerHTML = `${formatTime(time.days)}:${formatTime(time.hours)}:${formatTime(time.minutes)}:${formatTime(time.seconds)}`;
  //     }
  //   }, 1000);
  // }


  function startTimer() {
    const startButton = document.querySelector('button[data-start]');
    const datetimeInput = document.querySelector("#datetime-picker");
    startButton.disabled = true;
    datetimeInput.disabled = false;
    
    const targetDate = new Date(datetimePicker.selectedDates[0]);
    const timer = document.querySelector(".timer");
    countdownInterval = setInterval(() => {
      const now = new Date();
      const timeDifference = targetDate - now;
      if (timeDifference <= 0) {
        clearInterval(countdownInterval);
        timer.innerHTML = "00:00:00:00";
        startButton.disabled = false;
        datetimeInput.disabled = true;
      } else {
        const time = convertMs(timeDifference);
        timer.innerHTML = `${formatTime(time.days)}:${formatTime(time.hours)}:${formatTime(time.minutes)}:${formatTime(time.seconds)}`;
      }
    }, 1000);
  }
  function formatTime(value) {
    return value.toString().padStart(2, '0');
  }

  function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  }
  console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

  document.querySelector('button[data-start]').addEventListener('click', startTimer);