import { generateUser } from '../utils.js';


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

