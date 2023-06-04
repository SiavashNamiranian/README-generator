// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {message: "What is your project title\n", name:"# ", type:"input", index:0},
    {message: "Description\nprovide a short description explaining the what, why, and how of your project. Use the following questions as a guide:\n-what was your motivation?\n-why did you build this project?\n-what problem does it solve?\n-what did you learn?" , name:"## Description", type:'input'},
    {message: "if your README is long, would you like to add a table of contents to make it easy for users to find what they need\n", name:"## Table of Content", type:"confirm", index:1},
    {message: "if your README is long, would you like to add a table of contents to make it easy for users to find what they need\n", name:"## Table of Content", type:"confirm", index:1},

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
      var answer = JSON.stringify(answer,null, '\n');
      if(question.index===0){
       fs.appendFile('README.md', answer.replace(/['":{}]+/g,''), (err) =>
       err ? console.log(err) : console.log('Successful')
      )}
      else if (answer===true){
        fs.appendFile('README.md',  question.name.replace(/['":{}]+/g,'\n'), (err) =>
       err ? console.log(err) : console.log('Successful')
     )}
      else{fs.appendFile('README.md', answer.replace(/['":{}]+/g,'\n'), (err) =>
      err ? console.log(err) : console.log('Successful')
     )}}
     )
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
