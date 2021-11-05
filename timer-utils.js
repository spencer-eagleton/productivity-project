import { setUser, getUser } from './utils.js';

export function completeTask(taskId){
    const user = getUser();
    const checkedTask = user.tasks.find((task) => task.id === taskId);
    checkedTask.completed = true;
    setUser(user);
}

export function incompleteTask(taskId){
    const user = getUser();
    const uncheckedTask = user.tasks.find((task) => task.id === taskId);
    uncheckedTask.completed = false;
    setUser(user);
}