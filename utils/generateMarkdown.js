// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ${getLicense(answers.license)}

  ## Description 
  ${answers.description}

  ## Table of Contents: 
  - [Description](#Description)
  - [Installation Instructions](#Installation)
  - [Usage Information](#Usage) 
  - [Contributing Guidelines](#Contributing)
  - [Test Instructions](#Test)
  - [Questions & Contact Info](#Questions)
  - [License](#License)

  ## Installation

  1. Clone the repo
     git clone https://github.com/${answers.github}/${answers.installation}.git

  2. Install NPM packages
     npm install  
  

  ## Usage 
  ${answers.usage}


  ## Test
  ${answers.test}

  ## Build with

  This project was build with: 
  ${answers.build}

  ## Contributing
  ${answers.contributing}

  ## Questions 

  If you have any further questions, please don't hesitate to contact me:
  - [GitHub](https://www.github.com/${answers.github})
  - [Email me](mailto:${answers.contact})

  ## License
  ${answers.license}`

;
}


function getLicense(license) {
  if (license === 'None') {
    return ""
  } else {
    return `[![License](https://img.shields.io/badge/License-${license}-yellow.svg)]`
  }
}

module.exports = generateMarkdown;
