//create the install section
function generateInstall(install) {
  //divide steps and sort into an array
  const installSteps = install.split('|');

  //create individual installation steps from array
  const listSteps = installSteps.map(eachStep => {
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
  console.log(contribute);
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

//create and display badges for the language used
function showLanguageBadge(languages) {
  console.log(languages);

  const languageBadges = languages.map(eachLanguage => {
    if (eachLanguage === 'Javascript') {
      return ` [![Javascript](https://img.shields.io/badge/-Javascript-red)](https://shields.io/) `
    }

    if (eachLanguage === 'HTML') {
      return ` [![HTML](https://img.shields.io/badge/-HTML-success)](https://shields.io/) `
    }

    if (eachLanguage === 'CSS') {
      return ` [![CSS](https://img.shields.io/badge/-CSS-blue)](https://shields.io/) `
    }

    if (eachLanguage === 'ES6') {
      return ` [![HTML](https://img.shields.io/badge/-ES6-yellow)](https://shields.io/) `
    }

    if (eachLanguage === 'jQuery') {
      return ` [![HTML](https://img.shields.io/badge/-jQuery-orange)](https://shields.io/) `
    }

    if (eachLanguage === 'Bootstrap') {
      return ` [![HTML](https://img.shields.io/badge/-Bootstrap-blueviolet)](https://shields.io/) `
    }

    if (eachLanguage === 'Node') {
      return ` [![HTML](https://img.shields.io/badge/-Node-lightgrey)](https://shields.io/) `
    }

    if (eachLanguage === 'MySQL') {
      return `[![MySQL](https://img.shields.io/badge/-MySQL-blueviolet)](https://shields.io/)`
    }
  }).join('');

  return languageBadges;
};

//create and display license badge
function showLicenseBadge(license) {
  if (license === 'MIT') {
    chosenBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if(license === 'Mozilla') {
    chosenBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  } else if(license === 'Apache') {
    chosenBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if(license === 'Unilicense') {
    chosenBadge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
  } else if(license === 'GNU AGPLv3') {
    chosenBadge = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
  }
  return chosenBadge;
};

// function to generate markdown for README
function generateMarkdown(data) {

  const {install, usage, contribute, test, languages, ...other} = data;

  return `
  # ${other.title} 
  ${showLicenseBadge(other.license)} ${showLanguageBadge(languages)}

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
