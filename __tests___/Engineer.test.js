/*
The engineer test suite tests for the object creation of the engineer, 
Then it tests for the github, which is a unique attribute of engineer. 
These are the only tests because the others are covered in Employee, which would be 
redundant extends employee. 
*/ 

const Engineer = require('../lib/Engineer');


//testing if the intern object can be created
test('Create Engingeer', () => {
    const engineer = new Engineer('example', 123, 'engineer@company.com', 'examplegithub');
    
    //console logging out the object information to fix bugs. 
    console.log(engineer.id);
    console.log(engineer.name);
    console.log(engineer.github)
    expect(engineer.github.toString()).toEqual(expect.any(String));
});
//testing for the unique intern quality "school". 
test('test Github', () => {
    const engineer = new Engineer('example', 123, 'engineer@company.com', 'examplegithub');
    
    //console logging out the getGithub function to fix bugs.
    console.log(engineer.getGithub());
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});
 