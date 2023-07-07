// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  if (license === 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } if (license === 'GPL') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else {
    return '';
  }
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
    if (license === 'MIT') {
    return '[MIT](https://opensource.org/licenses/MIT) is the license for this project';
  }
  if (license === 'Apache') {
    return '[Apache](https://opensource.org/licenses/Apache-2.0) is the license for this project.';
  } if (license === 'GPL') {
    return '[GPL](https://www.gnu.org/licenses/gpl-3.0) is the license for this project.';
  } else {
    return '';
  }
}

//Function to generate markdown for README
function generateMarkdown( { title, motivation, problem, installation, usage, contribution, tests, license, username, email }) {
  return `# ${title}
  ${renderLicenseBadge(license)}
  ## Description  
  ${motivation} ${problem}  
  ## Table of Contents  
  [Installation](#installation)  
  [Usage](#usage)  
  [Contribution](#contribution)   
  [Tests](#tests)  
  [Questions](#questions)  
  [License](#license)  
  ## Installation  
  ${installation}
  ## Usage
  ${usage}  
  ## Contribution
  ${contribution}
  ## Tests
  ${tests}
  ## Questions
  For any questions, please reference my Github profile at https://github.com/${username} or email me at ${email}.
  ## License
  ${renderLicenseSection(license)}`;
}

module.exports = generateMarkdown;
