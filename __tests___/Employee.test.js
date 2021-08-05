//Employee is the base constructor, so it covers the three big tests of name, ID, and role. 
const Employee = require('../lib/Employee');


test('creates an employee object', () => {
    const employee = new Employee('Example', 123, 'Example@company.com');
   
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});


test('test name', () => {
    const employee = new Employee('Example', 123, 'Example@company.com');

    expect(employee.getName()).toEqual(expect.any(String));
});


test('test email', () => {
    const employee = new Employee('Example', 123, 'Example@company.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});


test('test role', () => {
    const employee = new Employee('Example', 123, 'Example@company.com');

    expect(employee.getRole()).toEqual("Employee");
}); 