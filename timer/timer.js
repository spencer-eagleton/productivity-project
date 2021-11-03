import { displayUser, getUser } from '../utils.js'; 
import { completeTask, incompleteTask } from '../timer-utils.js';

const user = getUser();
displayUser(user);

const taskContainer = document.getElementById('task-list'); 
const doneButton = document.getElementById('done-button'); 

for (let item of user.tasks){
    const li = document.createElement('li'); 
    const checkbox = document.createElement('input'); 
    checkbox.setAttribute('type', 'checkbox'); 
    li.textContent = item.message;
    li.append(checkbox); 
    taskContainer.append(li); 
    
    if (item.completed === true){
        checkbox.classList.add('completed');
    }
    checkbox.addEventListener('change', (e) => {
        if (e.target.checked){
            completeTask(item.id);
        } 
        else {
            incompleteTask(item.id);
            checkbox.classList.remove('completed');
        }
    });
} 


doneButton.addEventListener('click', () => {
    window.location.replace('../results');
});


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

