import { getUser, displayUser } from '../utils.js';

// grab DOM elements needed for results page
const resultsDisplay = document.getElementById('results-display');
const divCompleted = document.getElementById('completed-tasks');
const divIncompleted = document.getElementById('incompleted-tasks');
// display user on header
displayUser();
// call getUser() to update results page with 'USER'
const userObject = getUser();

// loop through 'USER', for each completed: true render ___
    // else, if completed: false, render _____
for (let item of userObject.tasks){
    if (userObject.tasks.completed === true){
        const h3Comp = document.createElement('h3');
        h3Comp.textContent = item.tasks;
        divCompleted.appendChild(h3Comp);
    }
    else if (userObject.tasks.completed === false){
        const h3Incomp = document.createElement('h3');
        h3Incomp.textContent = item.tasks;
        divIncompleted.appendChild(h3Incomp);
    }
    resultsDisplay.append(divCompleted, divIncompleted);
}