// TODO: Create a function that returns a license badge based on which license is passed in

const { link } = require("fs");

// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license.projectLicense === "N/A") {
    return "";
  } else {
    return `https://choosealicense.com/licenses/${license.projectLicense}/`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license.projectLicense === "N/A") {
    return "";
  } else {
    return `This application is covered under the license ${license.projectLicense}. For more information please refer to ${renderLicenseLink}.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection}

  ## Contributing
  ${data.contributing}

  ## Test
  ${data.test}

  ## Questions
  * GitHub: [${data.github}](https://github.com/${data.github}). \n
  * For more information please contact ${data.email}.
`;
}

module.exports = generateMarkdown;
