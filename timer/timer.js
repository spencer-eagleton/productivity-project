import { getUser, displayUser } from '../utils.js'; 

const user = getUser();

displayUser(user);

const taskContainer = document.getElementById('task-list'); 
const doneButton = document.getElementById('done-button'); 

for (let item of user.tasks){
    if (item.completed === false){
        let li = document.createElement('li'); 
        let checkbox = document.createElement('input'); 
        checkbox.setAttribute('type', 'checkbox'); 
        checkbox.classList.add('checkbox'); 
        // checkbox.value = item.id; 
        li.textContent = item.id;
        li.append(checkbox); 
        taskContainer.append(li); 
    }
} 


doneButton.addEventListener('click', () => {
    let checkedItems = document.querySelectorAll('input[type=checkbox]:checked'); 
    for (let item of checkedItems){
        console.log(user.tasks.completed); 
    }
}); 
    // find the corresponding item (findById)
    // change property to true
    // set back into local storage 
    // take all of the items in the list
    // if an item has been selected: 
    // mark that item as user.tasks.completed === true; 
    // then, send user to the next page
