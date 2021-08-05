class Employee {
    constructor (name, id, email,github,school) {
        this.name = name;
        this.id = id;
        this.email = email;
       // this.github = github;
      //  this.school = school;
    }


    //calls the employee name. 
    getName () {
        return this.name;
    }
    //calls the employee ID 
    getId () {
        return this.id;
    }   
   //calls the employee email 
    getEmail () {
        return this.email;
    }
    // calls the employee role. 
    getRole () {
        return 'Employee'; 
    }
};

//This command exports the employee class so it can be called by the index, generateHTML, and 
module.exports = Employee; 