const startButton = document.querySelector('.start-button');
const progressBar = document.querySelector('.progress-bar');
const timeSpan = document.querySelector('.time-span');

startButton.addEventListener('click', () => {
    let interval = 10;

    var countDown = setInterval(() => {
        interval--;
        let progressWidth = interval / 10 * 100;

        if (interval > 0){
            progressBar.style.width = progressWidth + '%';
            timeSpan.innerHTML = interval + 's';
        } else {
            clearInterval(countDown);
            progressBar.style.width = '0%';
            timeSpan.innerHTML = 'Break Over!';
            window.location.replace('../results');
        }
    }, 1000);
});