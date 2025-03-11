let timerInterval;
let seconds = 0;
let isRunning = false;

const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const clearBtn = document.getElementById('clearBtn');

function updateTimer() {
    seconds++;
    timerDisplay.textContent = seconds;
}

startBtn.addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        timerInterval = setInterval(updateTimer, 1000); // Update every second
    }
});

stopBtn.addEventListener('click', () => {
    if (isRunning) {
        isRunning = false;
        clearInterval(timerInterval);
    }
});

clearBtn.addEventListener('click', () => {
    isRunning = false;
    clearInterval(timerInterval);
    seconds = 0;
    timerDisplay.textContent = seconds;
});
