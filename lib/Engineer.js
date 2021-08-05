
//requires employee constructor since its an extension.
const Employee = require('./Employee');

// this class uses data from the employee class
class Engineer extends Employee {
    constructor (name, id, email, github) {

        //this calls the employee constructor using "super". 
        super (name, id, email); 
        
        //sets the unique ID (gitHub) to the user input.
        this.github = github;
     
    }

    // this overrides the employee role with the engineer role. 
    getRole () {
        return "Engineer";
    }

    //this function calls the engineers github. 
    getGithub() {
        return this.github;
    }
}

// this command exports the engineer class so it can be exported for use in index.js, generateHTML and the engineer tester.
module.exports = Engineer; 