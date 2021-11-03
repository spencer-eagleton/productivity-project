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
    li.textContent = item.id;
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
