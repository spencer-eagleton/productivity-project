import { displayUser, getUser, addTask } from '../utils.js';

const taskInput = document.getElementById('task-input'); 
const form = document.getElementById('task-input-form');
const startButton = document.getElementById('start-button');

const user = getUser();

displayUser(user);

taskInput.addEventListener('submit', (e) => {
    e.preventDefault(); 
    let formData = new FormData(taskInput);
    addTask(formData);
    window.location.replace('../timer'); 
}); 

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const task = data.get('task-input');
    addTask(task);
    form.reset();
    window.location.reload();
});

const taskContainer = document.getElementById('task-list'); 

for (let item of user.tasks){
    if (!item.completed){
        const li = document.createElement('li'); 
        li.textContent = item.message;
        taskContainer.append(li);
    }
}

startButton.addEventListener('click', ()=> {
    if (user.tasks.length <= 0){
        startButton.disabled = true;
        window.alert('Add a task!');
    }
    else {
        window.location.replace('../timer');
    }
});