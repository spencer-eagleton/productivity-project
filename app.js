// import functions and grab DOM elements
import { generateUser, setUser } from './utils.js';

import { quotes, randomQuote, } from './quote.js';






// initialize global state
const userForm = document.getElementById('user-form');

userForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const formData = new FormData(userForm);
    const userObject = generateUser(formData);
    setUser(userObject);
    window.location.replace('./user-input');
});



// set event listeners 

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

 




  
  