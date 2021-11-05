import { generateUser, setUser } from './utils.js';

const userForm = document.getElementById('user-form');

userForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const formData = new FormData(userForm);
    const userObject = generateUser(formData);
    setUser(userObject);
    window.location.replace('./user-input');
});




  
  