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
    const userName = document.createElement('span');
    userName.textContent = `Hello, ${userObject.name}`;
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


