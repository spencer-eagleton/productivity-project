//import getQuote from '../quote.js'


export const quotes = [
    'Anyone who has never made a mistake has never tried anything new', 
    'If you’re walking down the right path and you’re willing to keep walking, eventually you’ll make progress', 
    'The secret of getting ahead is getting started', 
    'Don’t count the days. Make the days count', 
    'You can, you should, and if you’re brave enough to start, you will', 
    'Tomorrow becomes never. No matter how small the task, take the first step now!'];

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






export function randomQuote() { 
    
    quotes[Math.floor(Math.random() * quotes.length)];

    
}

const getQuote = quotes[Math.floor(Math.random() * quotes.length)];







const quoteDisplay = document.getElementById('quote-text');
quoteDisplay.textContent = getQuote;


console.log(quoteDisplay);
