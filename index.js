const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown.js");
const writeFileAsync = util.promisify(fs.writeFile);


// array of questions for user
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your application: ',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please enter your project repository name:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please enter the usage information',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What license would you like for your project?',
        choices: ['MIT', 'None', 'GPLv2','LGPLv3', 'AFL-3.0']
      },
      {
        type: 'checkbox',
        name: 'build',
        message: 'What is your project build with?',
        choices: [' Java Script', ' HTML',' CSS', ' Node', ' Git']
      },

      {
        type: 'input',
        name: 'contributing',
        message: 'What are the contribution guidelines?',
      },
      {
        type: 'input', 
        name: 'test',
        message: 'How to test your project?'
      },
      {
        type: 'input', 
        name: 'contact',
        message: 'What is your email address?'
      },

    ]);
  };

  promptUser() 
  .then((answers) => writeFileAsync('./README.md', generateMarkdown(answers)))
  .then(() => console.log('Successfully wrote to readME'))
  .catch((err) => console.error(err));


