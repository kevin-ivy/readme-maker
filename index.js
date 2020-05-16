const inquirer = require("inquirer");

// function to write README file
function writeToFile(fileName, data) {
}

// function to collect user data
const userData = () => {
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
        }
    ]);
};

//function to collect data about user's project
const projectData = projectDetails => {
    console.log(`
    ================================================
    Please answer some questions about your project.
    ================================================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: titleInput => {
                if (titeInput) {
                    return true;
                } else {
                    console.log('You must give your project a title.');
                    return false;
                }
            }            
        }
    ])
}

// function call to initialize program
userData()
    .then(projectData);