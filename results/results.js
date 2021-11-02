import { getUser, clearStorage } from '../utils.js';

// grab DOM elements needed for results page
const resultsDisplay = document.getElementById('results-display');
const divCompleted = document.getElementById('completed-tasks');
const divIncompleted = document.getElementById('incompleted-tasks');
const homeButton = document.getElementById('home-button');
const newTaskButton = document.getElementById('new-task-button');
// display user on header
// displayUser();
// call getUser() to update results page with 'USER'
const userObject = getUser();
// loop through 'USER', for each completed: true render ___ onto divCompleted
    // else, if completed: false, render _____ onto divIncompleted
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

// clears local storage, brings you back to welcome page
homeButton.addEventListener('click', ()=> {
    clearStorage();
});

// go back to user-input page
newTaskButton.addEventListener('click', ()=> {
    window.location.replace('../user-input');
});

