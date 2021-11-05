export function generateUser(formData){
    return {
        name:formData.get('name-input'),
        tasks: []
    };
}

export function setUser(userObject){
    const userString = JSON.stringify(userObject);
    localStorage.setItem('USER', userString);
}

export function getUser(){
    const userString = localStorage.getItem('USER');
    return JSON.parse(userString);
}

export function displayUser(userObject){
    const userDisplay = document.getElementById('user-display');
    const logo = document.getElementById('logo'); 
    
    const userName = document.createElement('span');
    const img = document.createElement('img'); 
    
    img.setAttribute('id', 'hourglass'); 
    img.src = '../assets/hourglass.png';
    userName.textContent = `Hello, ${userObject.name}!`;
    
    logo.append(img); 
    userDisplay.append(userName);
}

export function addTask(task){
    const newTask = {
        id: Math.ceil(Math.random() * 10000), 
        message: task,
        completed: false
    };
    let userObject = getUser(); 
    userObject.tasks.push(newTask);
    setUser(userObject); 
}

export function clearStorage(){
    localStorage.removeItem('USER');
    window.location.replace('..');
}
