let countdown = 10;
const timerElement = document.getElementById('timer');

const intervalId = setInterval(() => {
    timerElement.textContent = countdown;
    countdown--;

    if (countdown < 0) {
        clearInterval(intervalId);
        timerElement.textContent = "Start";
    }
}, 1000); 