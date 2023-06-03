// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {message: "What is your project title\n", name:"# ", type:"input"},
    {message: "Description\nprovide a short description explaining the what, why, and how of your project. Use the following questions as a guide:\n-what was your motivation?", name:"## Description\n", type:'input'}
];




    
  async function askQuestion() {
  
    for(const question of questions) {
     await inquirer
      .prompt([

  
      
         {
          type: question.type,
          message: question.message,
          name: question.name,
         },
     
     ])
     
     .then((answer) => {
      var answer = JSON.stringify(answer)+"\n";
       fs.appendFile('README.md', answer.replace(/['":{}]+/g,'')+"\n" , (err) =>
       err ? console.log(err) : console.log('Successful')
      )})
      
   }
   
  };

askQuestion();
//  }       

  //   )))



// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}




// TODO: Create a function to initialize app


// function init() {}

// Function call to initialize app


// init();
