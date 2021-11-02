import { generateUser, getUser, setUser } from '../utils.js';


const test = QUnit.test;

test('generateUser function returns userObject with name input', (expect)=> {
    const userObject = {
        name:'mira',
        tasks:[]
    };
    const formData = new FormData();
    formData.set('name', 'mira');

    const actual = generateUser(formData);
    expect.deepEqual(userObject, actual);
}); 

test('setUser function sends userObjects to localstorage', (expect)=> {
    const userObject = {
        name: 'mira',
        tasks: []
    };
    setUser(userObject);

    const actual = JSON.parse(localStorage.getItem('USER'));

    expect.deepEqual(actual, userObject);
});

test('getUser function should return the userObject from localstorage', (expect)=>{
    const userObject = {
        name: 'mira',
        tasks: []
    };

    setUser(userObject);

    const actual = getUser();

    expect.deepEqual(actual, userObject);
});

