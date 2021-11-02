import { getUser, displayUser } from '../utils.js'; 

const user = getUser();

displayUser(user);

const taskContainer = document.getElementById('task-list'); 

// const userTasks = user.tasks; 
// console.log(userTasks[0].id); 

for (let item of user.tasks){
    if (item.completed === false){
        const li = document.createElement('li'); 
        const box = document.createElement('input'); 
        box.setAttribute('type', 'checkbox'); 
        li.textContent = item.id;
        li.append(box); 
        taskContainer.append(li); 
    }} 

// loop through each 'task' in LS
// if task is incomplete, 
// create item: li
// li text content = from LS
// input type = checkbox

// append li onto taskContainer ul