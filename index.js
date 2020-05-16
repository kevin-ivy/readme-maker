const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js');

// function to write README file
function writeToFile(fileName, data) {
}

//function to collect data about user's project
const projectData = projectDetails => {
    console.log(`
    ====================================================
    Please answer some questions about your application.
    ====================================================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('You must enter your GitHub username to continue.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('You must enter your email address to continue.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your application?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('You must give your application a title.');
                    return false;
                }
            }            
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a short description of your application:',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('You must enter a description for your application.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'Please enter the steps to install your application (Separate steps with the | character):',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('You must include the steps to install your application.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide steps for using your application (Separate steps with the | character):',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('You must include usage steps for your application.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribute',
            message: '(Optional) Please include contribution guidelines for your application (Separate guidelines with the | character):'
        },
        {
            type: 'input',
            name: 'test',
            message: '(Optional) What tests are included with your application?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select the license for your application:',
            choices: ['MIT', 'Unilicense', 'Boost', 'Apache', 'GNU AGPLv3'],
            default: 'MIT'
        }
    ])
}

// function call to initialize program
projectData()
    .then(projectDetails => {
        return generateMarkdown(projectDetails);
    });