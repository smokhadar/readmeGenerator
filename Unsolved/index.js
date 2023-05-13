// Packages needed for this application
// add to package json
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs');
const { default: Choices } = require('inquirer/lib/objects/choices');

//Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    }, 
    {   
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation for the project?'
    }, 
    {
        type: 'input',
        name: 'problem',
        message: 'What problem does your project solve?',
    }, 
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How can your project be used?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please list any and all collaborators on this project, with links to their Github profiles.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Did you write tests for your project? If yes, please share how to run them here.'
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
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
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
        writeToFile('Readme.md', markdownText);
        console.log(answers);
    });
}

// Function call to initialize app
init();
