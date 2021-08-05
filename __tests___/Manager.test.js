/*
The Manager test suite tests for the object creation of the manager, 
Then it tests for the office number, which is a unique attribute of manager. 
These are the only tests because the others are covered in Employee, which would be 
redundant since manager extends employee.
*/ 

const Manager = require('../lib/Manager');

test('Create Manager', () => {
    const manager = new Manager('example', 123, 'Manager@company.com', 1234);
    
    console.log(manager.id);
    console.log(manager.name);
    console.log(manager.officeNumber);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

//testing the getOffice function in the manager class. 
test('test office number', () => {
    const manager = new Manager('example', 123, 'Manager@company.com', 1234);

    console.log(manager.getOffice());
    expect(manager.getOffice()).toEqual(expect.any(Number));
});

