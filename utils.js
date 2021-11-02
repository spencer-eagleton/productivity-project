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


