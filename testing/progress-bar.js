let timer = 27;
const progressBar = document.getElementById('progress-bar');

let interval = setInterval(()=>{
    console.log(timer--);
    progressBar.style.width = `${timer / 27 * 100}%`;
    if (timer === 0){
        clearInterval(interval);
        // window.location.replace('../results');
        window.alert('Time for a break. You deserve it!');
    }
}, 1000);
