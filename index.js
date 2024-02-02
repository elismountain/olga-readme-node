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
        name: 'installation',
        message: 'Please enter the installation instructions:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please enter the usage information',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What license would you like for your project?',
        choices: ['MIT', 'None', 'GPLv2','LGPLv3', 'AFL-3.0']
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input', 
        name: 'email',
        message: 'What is your email address?'
      }
    ]);
  };

  promptUser() 
  .then((answers) => writeFileAsync('./README.md', generateMarkdown(answers)))
  .then(() => console.log('Successfully wrote to readME'))
  .catch((err) => console.error(err));


