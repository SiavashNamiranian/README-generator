// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {message: "What is your project title\n", name:"# ", type:"input", index:0},
    {message: "Description\nprovide a short description explaining the what, why, and how of your project. Use the following questions as a guide:\n-what was your motivation?\n-why did you build this project?\n-what problem does it solve?\n-what did you learn?" , name:"## Description", type:'input'},
    {message: "Table of content\nif your README is long, would you like to add a table of contents to make it easy for users to find what they need\n", name:"confirm", type:"confirm"},
    {message: "Required Installations\nWhat are the steps required to install your projec? Provide a step-by-step description of how to get the development environment running\n", name:"## Installation(s) ", type:"input"},
    {message: "Usage instruction\nProvide instruction and example for use. include screenshots as needed.\n To add a screenshot, create an \'assets/images\' folder in your repository and upload your screentshot to it. Then, using the relative filepath, add it to your README using the following syntax: ```md![alt text](assets/images/screenshot.png) ", name:"## Usage ", type:"input"},
    {message: "Credits to consider\nList your collaborators, if any, with link to their GitHub profiles.\nIf you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.\nif you followed tutorials, include links to those here as well", name:"## Credits", type:"input"},
  {message: "License\nThe last section of a high quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to \'https://choosealicense.com/\'\n", choices: ['GNU GPLv 3','GNU GPLv3','GNU LGPLv3','Mozilla Public License 2.0','Apache License 2.0','MIT License','Boost Software License 1.0','Boost Software License 1.0'] , name:'## License', type:'checkbox', default:"No License (under strict copyright protection, unless content is published on public repository)", index:1},
];



    
  async function askQuestion() {
  
    for(const question of questions) {
      
     await inquirer
      .prompt([

  
      
         {
          type: question.type,
          message: question.message,
          name: question.name,
          choices: question.choices,
         },
     
     ])
     
     .then((answer) => {
      if(question.index===0){
       var answer = JSON.stringify(answer,null, '\n');
       fs.appendFile('README.md', answer.replace(/[":{}]/g,''), (err) =>
       err ? console.log(err) : id=question.name
      )}
      else if (answer.confirm === true) {
        fs.appendFile('README.md',  "## Table of Content:", () =>
       {fs.appendFile('README.md', '\n<a href="# Installation">Installation</a>\n' ,()=>
       {fs.appendFile('README.md', '\n<a href="# Usage">Usage</a>\n' ,()=>
       {fs.appendFile('README.md', '\n<a href="# Credits"> Credits </a>\n' ,()=>
       {fs.appendFile('README.md', '\n<a href="# License">License</a>\n' ,(err)=>
       err ? console.log(err) : console.log('Successful'))})})})})}
      else if (answer.confirm === false){
        return;
      }
       else {
        var answer = JSON.stringify(answer,null, '\n');
        fs.appendFile('README.md', answer.replace(/[":{}]/g,'\n'), (err) =>
      err ? console.log(err) : id=question.name)}
    })}
  }

askQuestion();




// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}




// TODO: Create a function to initialize app


// function init() {}

// Function call to initialize app


// init();
