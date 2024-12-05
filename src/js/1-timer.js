import flatpickr from "flatpickr";
import iziToast from "izitoast";

import "flatpickr/dist/flatpickr.min.css";
import "izitoast/dist/css/iziToast.min.css";

const inputRef = document.querySelector('#datetime-picker');
const startBtnRef = document.querySelector('button[data-start]');
startBtnRef.addEventListener('click', startTimer);
startBtnRef.disabled = true;

const timerRefs = {
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]')
}

let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const diff = new Date(selectedDates[0]).getTime() - Date.now();

    if (diff <= 0) {
      iziToast.show({
        title: 'Warning',
        message: 'Please choose a date in the future',
        position: 'topRight',
        color: 'red'
      });
    } else {
      userSelectedDate = selectedDates[0];
      startBtnRef.disabled = false;
    }
  },
};

flatpickr("#datetime-picker", options);

function startTimer() {
  const intervalId = setInterval(()=> {

    startBtnRef.disabled = true;
    inputRef.disabled = true;

    const diff = new Date(userSelectedDate).getTime() - Date.now();
    let { days, hours, minutes, seconds } = convertMs(diff);

    timerRefs.days.textContent = addLeadingZero(days);
    timerRefs.hours.textContent = addLeadingZero(hours);
    timerRefs.minutes.textContent = addLeadingZero(minutes);
    timerRefs.seconds.textContent = addLeadingZero(seconds);

    if (diff <= 0) {
      clearInterval(intervalId);
      inputRef.disabled = false;
    }

  }, 1000)
}

function convertMs(ms) {
  
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
