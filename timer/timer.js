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
        li.classList.add('completed');
    }

    checkbox.addEventListener('change', (e) => {
        if (e.target.checked){
            completeTask(item.id);
            li.style.textDecoration = 'line-through';
        } 
        else {
            incompleteTask(item.id);
            checkbox.classList.remove('completed');
            li.style.textDecoration = 'none';
        }
    });
} 


doneButton.addEventListener('click', () => {
    window.location.replace('../results');
});


let timer = 0;
const progressBar = document.getElementById('progress-bar');
const duration = 2700;
const interval = 1000;
   
let intervalId = setInterval(()=>{
    timer++;
 
    console.log(timer);
    progressBar.style.width = `${timer * (duration / interval)}%`;
    if (timer === (duration / 100) + 1){
        clearInterval(intervalId);

        // window.location.replace('../results');
        window.alert('Time for a break. You deserve it!');
    }
}, 1000);

