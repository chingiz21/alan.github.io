
//getting elements from html
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secsEl = document.getElementById('secs');

//creating const of birthday
const birthdayDate = '19 Jan 2021';

function countdown() {
    //translating them
    const birthday = new Date(birthdayDate);
    const currentDate = new Date();
    //calculating 
    const totalSeconds = (birthday - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24 + 14;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);
    //entering/pasting them to html
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = minutes;
    secsEl.innerHTML = seconds;

}
//initial call
countdown();
setInterval(countdown, 1000);



