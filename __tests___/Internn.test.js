/*
The intern test suite tests for the object creation of the intern, 
Then it tests for the school, which is a unique attribute of intern. 
These are the only tests because the others are covered in Employee, which would be 
redundant since intern extends employee.. 
*/ 

const Intern = require('../lib/Intern');


//testing if the intern object can be created
test('Create Intern', () => {
    const intern = new Intern('example', 123, 'intern@company.com', 'MSU');
    
    console.log(intern.id);
    console.log(intern.name);
    console.log(intern.school);
    expect(intern.school).toEqual(expect.any(String));
});
//testing for the unique intern quality "school". 
test('test School', () => {
    const intern = new Intern('example', 123, 'intern@company.com', 'MSU');
    
    console.log(intern.getSchool);
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

