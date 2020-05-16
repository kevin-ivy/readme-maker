//create the install section
function generateInstall(install) {
  //divide steps and sort into an array
  const installSteps = install.split('|');

  //create individual installation steps from array
  const listSteps = installSteps.map(eachStep =>{
    return `
  * ${eachStep.trim()}`
  }).join('');

  return listSteps;
};

//create the usage section
function generateUsage(usage) {
  //divide steps and sort into an array
  const usageSteps = usage.split('|');

  //create individual usage steps from array
  const listSteps = usageSteps.map(eachStep =>{
    return `
  * ${eachStep.trim()}`
  }).join('');

  return listSteps;
};

//create the constribute section
function generateContribute(contribute) {
  //divide steps and sort into an array
  const contributeSteps = contribute.split('|');

  //create individual contribution steps from array
  const listSteps = contributeSteps.map(eachStep =>{
    return `
  * ${eachStep.trim()}`
  }).join('');

  return listSteps;
};

//create the test section
function generateTest(test) {
  //divide steps and sort into an array
  const testSteps = test.split('|');

  //create individual test steps from array
  const listSteps = testSteps.map(eachStep =>{
    return `
  * ${eachStep.trim()}`
  }).join('');

  return listSteps;
};

// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);

  const {install, usage, contribute, test, ...other} = data;

  return `
  # ${other.title}
  ${other.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribute](#contribute)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)
    
  ## Installation
  ${generateInstall(install)}

  ## Usage
  ${generateUsage(usage)}

  ## Contribute
  ${generateContribute(contribute)}

  ## Tests
  ${generateTest(test)}

  ## License
  Licensed under the ${other.license} license.

  ## Questions
  If you have any questions, concerns, or suggestions, you can reach me by emailing me at ${other.email}. 
      
  You can also view more of my applications on my [GitHub page](https://github.com/${other.github})`;
};

module.exports = generateMarkdown;
