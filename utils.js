export function generateUser(formData){
    return {
        name:formData.get('name'),
        tasks: []
    };

}
