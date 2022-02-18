// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  let badge = undefined;

  switch (license) {
    case 'Apache':
      badge = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
      break;
    case 'BSD':
      badge = 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg';
      break;
    case 'Eclipse':
      badge = 'https://img.shields.io/badge/License-EPL_1.0-red.svg';
      break;
    case 'GNU GPL v3':
      badge = 'https://img.shields.io/badge/License-GPLv3-blue.svg';
      break;
    case 'GNU GPL v2':
      badge = 'https://img.shields.io/badge/License-GPL_v2-blue.svg';
      break;
    case 'IBM':
      badge = 'https://img.shields.io/badge/License-IPL_1.0-blue.svg';
      break;
    case 'ISC':
      badge = 'https://img.shields.io/badge/License-ISC-blue.svg';
      break;
    case 'MIT':
      badge = 'https://img.shields.io/badge/License-MIT-yellow.svg';
      break;
    case 'Mozilla':
      badge = 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg';
      break;
    case 'Unlicense':
      badge = 'https://img.shields.io/badge/license-Unlicense-blue.svg';
      break;
    default:
      badge = '';
      break;
  }
  return badge;
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
  let link = undefined;

  switch (license) {
    case 'Apache':
      link = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'BSD':
      link = 'https://opensource.org/licenses/BSD-3-Clause';
      break;
    case 'Eclipse':
      link = 'https://opensource.org/licenses/EPL-1.0';
      break;
    case 'GNU GPL v3':
      link = 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    case 'GNU GPL v2':
      link = 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
      break;
    case 'IBM':
      link = 'https://opensource.org/licenses/IPL-1.0';
      break;
    case 'ISC':
      link = 'https://opensource.org/licenses/ISC';
      break;
    case 'MIT':
      link = 'https://opensource.org/licenses/MIT';
      break;
    case 'Mozilla':
      link = 'https://opensource.org/licenses/MPL-2.0';
      break;
    case 'Unlicense':
      link = 'http://unlicense.org/';
      break;
    default:
      link = '';
      break;
  }
  return link;
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  let badge = renderLicenseBadge(license);
  let link = renderLicenseLink(license);
  return (badge ? `[![GitHub License: ${license}](${badge})](${link})` : '');

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  // deconstruct data
  let { user, email, title, desc, license, install, test, usage, contribute } = data;
  let licBadge = renderLicenseSection(license);
  // return `# ${data.title}\n# ${desc}`;

let output = 
`# ${title}

${licBadge}

## Description
${desc}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
To install the project dependencies, run the following command:

\`\`\`
${install}
\`\`\`

## Usage
${usage}

## License
This project is licensed under the ${license} license.

## Contributing
${contribute}

## Tests
To run tests, run the following command:

\`\`\`
${test}
\`\`\`

## Questions
If you have any questions about the repo, open an issue or contact me at ${email}
Visit my GitHub profile at [${user}](https://github.com/${user}/).`

return output;
}

module.exports = generateMarkdown;