//fires when a manager object is created.
const generateManager = function (manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
            </div>
            <div class="card-body">
                <p>ID: ${manager.id}</p>
                <p>Role: ${manager.getRole()}</p>
                <p>Email: ${manager.email}</p>
                <p>Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

// fires when an engineer object is created.
const generateEngineer = function (engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineer.name}</h3>
            </div>
            <div class="card-body">
                <p>ID: ${engineer.id}</p>
                <p>Role: ${engineer.getRole()}</p>
                <p>Email: ${engineer.email}</p>
                <p>Github: ${engineer.github}</p>
            </div>
        </div>
    </div>
    `
}

// Fires when an intern object is created.
const generateIntern = function (intern) {
    return ` <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${intern.name}</h3>
            </div>
            <div class="card-body">
                <p>ID: ${intern.id}</p>
                <p>Role: ${intern.getRole()}</p>
                <p>Email: ${intern.email}</p>
                <p>School: ${intern.school}</p>
            </div>
    </div>
</div>
    `
};

//builds the HTML by utilizing an array for the page. 
generateHTML = (data) => {

    // declares an empty array for cards being generated.
    HTMLArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 


       // checks the response. If it matches Manager, the generateManager function is fired.
        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            HTMLArray.push(managerCard);
        }

       // checks the response. If it matches Engineer, the generateEngineer function is fired.
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            HTMLArray.push(engineerCard);
        }

       // checks the response. If it matches Intern, the generateIntern function is fired.
        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            HTMLArray.push(internCard);
        }
        
    }
    //joins the array objects and saves them to a var. 
    const allCards = HTMLArray.join('')
    const generateTeam = generateTeamPage(allCards); 
    return generateTeam;

}

// generate html page 
const generateTeamPage = function (allCards) {   
  return`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>HW 10: Object Oriented Programming</title>
      <link rel="stylesheet" href="style.css">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
    
  </head>
  <body>
      <header></header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  ${allCards}
              </div>
          </div>
      </main>
      
  </body>

  </html>`;
}

// export to index
module.exports = generateHTML; 