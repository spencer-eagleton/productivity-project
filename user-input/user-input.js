import { displayUser, getUser, addTask } from '../utils.js';

const taskInput = document.getElementById('task-input'); 

const user = getUser();

displayUser(user);

taskInput.addEventListener('submit', (e) => {
    e.preventDefault(); 
    let formData = new FormData(taskInput);
    addTask(formData); 
    window.location.replace('../timer');
}); 
