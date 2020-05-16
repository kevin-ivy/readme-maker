const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// function to write README file
function writeFile(readMeText) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', readMeText, err => {
            if (err) {
                reject(err);
                return;
            }
    
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

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
            message: 'Please include contribution guidelines for your application (Separate guidelines with the | character):',
            validate: contributeInput => {
                if (contributeInput) {
                    return true;
                } else {
                    console.log('You must include contribution guidelines for your application.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'What tests are included with your application?',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('You must include test information. If none are available, please note so.');
                    return false;
                }
            }
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
    })
    .then(readMeText => {
        return writeFile(readMeText)
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    });