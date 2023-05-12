// TODO: Include packages needed for this application
// add to package json
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title'
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
        name: 'contribution',
        message: 'Please list any and all collaborators on this project, with links to their Github profiles.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Did you write tests for your app? If yes, please share how to run them here.'
    },
    // include license? need to present options
    // {
    //     type: 'input',
    //     name: 'license',
    //     message: 'What are the steps required to install your project?'
    // },
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // TODO add fs code here to save file
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(answers) {
        const markdownText = generateMarkdown(answers);
        writeToFile('Readme', markdownText);
    });
}

// Function call to initialize app
init();
