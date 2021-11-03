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



// export function findById(id, itemList) {
//     for (let item of itemList) {
//         if (item.id === id){
//             return item;
//         }
//     }
// }

export function clearStorage(){
    localStorage.removeItem('USER');
    window.location.replace('..');
}
