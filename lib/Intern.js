//requires employee constructor since its an extension.
const Employee = require('./Employee');

// manager constructor extends employee constructor 
class Intern extends Employee {
    constructor (name, id, email, school) {
        // calling employee constructor
        super (name, id, email); 
        
       this.school = school
    }

    // override employee role to engineer 
    getRole () {
        return "Intern";
    }

    getSchool () {
        return this.school;
    }
}

// to be exported 
module.exports = Intern; 