// TODO: Create a function that returns a license badge based on which license is passed in

const { link } = require("fs");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = ``;
  if (license === "GNU AGPLv3") {
    badge = `![License](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)`;
    return badge;
  } else if (license === "GNU GPLv3") {
    badge = `![License](https://img.shields.io/badge/License-GPL%20v3-blue.svg)`;
    return badge;
  } else if (license === "GNU LGPLv3") {
    badge = `![License](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)`;
    return badge;
  } else if (license === "Mozilla Public License 2.0") {
    badge = `![License](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`;
    return badge;
  } else if (license === "Apache License 2.0") {
    badge = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
    return badge;
  } else if (license === "MIT License") {
    badge = `![License](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    return badge;
  } else {
    badge = "";
    return badge;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = ``;
  if (license === "GNU AGPLv3") {
    link = "https://choosealicense.com/licenses/agpl-3.0/";
    return link;
  } else if (license === "GNU GPLv3") {
    link = "https://choosealicense.com/licenses/gpl-3.0/";
    return link;
  } else if (license === "GNU LGPLv3") {
    link = "https://choosealicense.com/licenses/lgpl-3.0/";
    return link;
  } else if (license === "Mozilla Public License 2.0") {
    link = "https://choosealicense.com/licenses/mpl-2.0/";
    return link;
  } else if (license === "Apache License 2.0") {
    link = "https://choosealicense.com/licenses/apache-2.0/";
    return link;
  } else if (license === "MIT License") {
    link = "https://choosealicense.com/licenses/mit/";
    return link;
  } else {
    link = "";
    return link;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.projectLicense)}

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
  This application is covered by ${data.projectLicense}. For more information please refer to ${renderLicenseLink(data.projectLicense)}

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
