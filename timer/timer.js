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
        // checkbox.classList.add('checkbox'); 
        // checkbox.value = item.id; 
    li.textContent = item.id;
    li.append(checkbox); 
    taskContainer.append(li); 
    
    if (item.completed === true){
        checkbox.classList.add('completed');
    }
    checkbox.addEventListener('change', () => {
        let checkedItems = document.querySelectorAll('input[type=checkbox]:checked');
        if (checkedItems){
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
// doneButton.addEventListener('click', () => {
//     let checkedItems = document.querySelectorAll('input[type=checkbox]:checked'); 
//     for (let item of checkedItems){
//         console.log(user.tasks.completed); 
//     }
// }); 
    // find the corresponding item (findById)
    // change property to true
    // set back into local storage 
    // take all of the items in the list
    // if an item has been selected: 
    // mark that item as user.tasks.completed === true; 
    // then, send user to the next page
