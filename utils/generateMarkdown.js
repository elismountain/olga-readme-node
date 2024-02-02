// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

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
  ${answers.installation}

  ## Usage 
  ${answers.usage}


  ## Test
  N/A

  ## Contributing
  ${answers.contributing}

  ## Questions 

  If you have any further questions, please don't hesitate to contact me:
  - [GitHub](https://www.github.com/${answers.github})
  - [Email me](mailto:${answers.email})

  ## License
  ${answers.license}`

;
}

module.exports = generateMarkdown;
