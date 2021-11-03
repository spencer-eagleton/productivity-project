import { getUser, displayUser, setUser, findById } from '../utils.js'; 

const user = getUser();

displayUser(user);

const taskContainer = document.getElementById('task-list'); 
const doneButton = document.getElementById('done-button'); 

for (let item of user.tasks){
    let li = document.createElement('li'); 
    let checkbox = document.createElement('input'); 
        
    checkbox.setAttribute('type', 'checkbox'); 
    checkbox.classList.add('complete'); 
        
    li.textContent = item.message;
        
    li.append(checkbox); 
    taskContainer.append(li); 

    if (item.completed === true){
        checkbox.classList.add('completed'); 
    }

    checkbox.addEventListener('change', () => {
        completeTask(item.id); 
    }); 
}
    

function completeTask(taskId){
    const user = getUser(); 
    const checkedTask = findById(taskId, user.tasks); 
    checkedTask.completed = true; 
    setUser(user); 
}

function incompleteTask(taskId){
    const user = getUser(); 
    const checkedTask = user.tasks.find((task) => task.id === taskId); 
    checkedTask.completed = false; 
    setUser(user); 
}

// console.log(user);

doneButton.addEventListener('click', () => {
    window.location.replace('../results'); 
}); 

    // find the corresponding item (findById)
    // change property to true
    // set back into local storage 
    // take all of the items in the list
    // if an item has been selected: 
    // mark that item as user.tasks.completed === true; 
    // then, send user to the next page