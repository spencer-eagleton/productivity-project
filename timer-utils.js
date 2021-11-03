import { setUser, getUser } from './utils.js';
// const taskContainer = document.getElementById('task-list'); 

// export function renderTask(task) {
//     // const li = document.createElement('li'); 
//     // li.textContent = task.id;
//     // const checkbox = document.createElement('input'); 
//     // checkbox.setAttribute('type', 'checkbox'); 
        
//     // li.append(checkbox);
//     // taskContainer.append(li);
        
//     if (task.completed === true){
//         checkbox.classList.add('completed'); 
//     }

//     checkbox.addEventListener('change', () => {
//         completeTask(task.id);
//         renderTask();
//     });
//     return checkbox;
// }

export function completeTask(taskId){
    const user = getUser();
    const checkedTask = user.tasks.find((task) => task.id === taskId);
    checkedTask.completed = true;
    setUser(user);
}

export function incompleteTask(taskId){
    const user = getUser();
    const uncheckedTask = user.tasks.find((task) => task.id === taskId);
    uncheckedTask.completed = false;
    setUser(user);
}