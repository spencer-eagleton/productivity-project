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

// export function getTasks() {
//     let lsTasks = localStorage.getItem('TASKS'); 
//     const tasks = JSON.parse(lsTasks); 

//     if (!tasks){
//         const taskString = JSON.stringify()
//     }
//     return tasks; 
// }

export function addTask(tasksForm){

    const newTask1 = tasksForm.get('task1');
    const newTask2 = tasksForm.get('task2'); 
    const newTask3 = tasksForm.get('task3'); 
    
    let userObject = getUser(); 
    
    const tasks = [newTask1, newTask2, newTask3]; 
    
    for (let item of tasks){
        userObject.tasks.push({ id: item, completed: false });  
    }

    setUser(userObject); 
}




// {id: 'do laundry', completed: false}, {id: 'do homework;, completed: false}

// {
//     username: 'Mark',
   
//            todos: [
//                {
//                    todo: appended from input1
//                    completed: false
//                },
//                {
//                    todo: appended from input2
//                    completed: false
//                },
//                {
//                    todo: appended from input3
//                    completed: true
//                },
//            ]
//        }