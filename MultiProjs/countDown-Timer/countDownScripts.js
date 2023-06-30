const newYear = '1 Jan 2024';
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function countDown() {
    const newYearDate = new Date(newYear);

    const currentDate = new Date();
    const totalSeconds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days.toString();
    hoursEl.innerHTML = hours.toString();
    minutesEl.innerHTML = minutes.toString();
    secondsEl.innerHTML = seconds.toString();
}

countDown();
setInterval(countDown, 1000);