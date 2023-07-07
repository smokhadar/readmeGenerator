// Packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Enter your title name here.');
                return false;
            }
        }
    }, 
    {   
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation for the project?',
        validate: motivationInput => {
            if (motivationInput) {
                return true;
            } else {
                console.log('Enter your motivation for the project here.');
                return false;
            }
        }
    }, 
    {
        type: 'input',
        name: 'problem',
        message: 'What problem does your project solve?',
        validate: problemInput => {
            if(problemInput) {
                return true;
            } else {
                console.log('Enter the problem your project solves here.');
                return false;
            }
        }
    }, 
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Enter the installation steps here.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How can your project be used?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Enter how your project can be used here.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please list any and all collaborators on this project, with links to their Github profiles.',
        validate: contributionInput => {
            if(contributionInput) {
                return true;
            } else {
                console.log('Enter any collaborators here.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Did you write tests for your project? If yes, please share how to run them here.',
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log('Enter any test info for your project here.');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license from the choices below.',
        choices: ['MIT', new inquirer.Separator(),'Apache', new inquirer.Separator(), 'GPL', new inquirer.Separator(), 'No license'],
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Enter your Github username here.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Enter your email here.');
                return false;
            }
        }
    },
];



//Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!'));
}

//Function to initialize app
function init() {
    inquirer.prompt(questions).then(function(answers) {
        const markdownText = generateMarkdown(answers);
        writeToFile('ReadMe_example.md', markdownText);
        console.log(answers);
    });
}

// Function call to initialize
init();
