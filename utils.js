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


export function addTask(tasksForm){

    const newTask1 = tasksForm.get('task1');
    const newTask2 = tasksForm.get('task2'); 
    const newTask3 = tasksForm.get('task3'); 
    
    let userObject = getUser(); 
    
    const tasks = [newTask1, newTask2, newTask3]; 
    
    for (let item of tasks){
        userObject.tasks.push({ 
            id: Math.ceil(Math.random() * 10000), 
            message: item, 
            completed: false });  
    }

    setUser(userObject); 
}

export function findById(id, itemList) {
    for (let item of itemList) {
        if (item.id === id){
            return item;
        }
    }
}

export function clearStorage(){
    localStorage.removeItem('USER');
    window.location.replace('..');
}
