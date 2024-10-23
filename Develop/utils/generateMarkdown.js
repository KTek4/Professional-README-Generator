// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge;
  if (license === "Apache 2.0 License") {
    badge = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  } else if (license === "GNU General Public v3.0 License") {
    badge = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if (license === "MIT License") {
    badge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === "ISC License") {
    badge = `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`;
  } else if (license === "BSD 2-Clause “Simplified” License") {
    badge = `![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)`;
  } else {
    badge = '';
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link;
  if (license === "Apache 2.0 License") {
    link = `https://choosealicense.com/licenses/apache-2.0/`;
  } else if (license === "GNU General Public v3.0 License") {
    link = `https://choosealicense.com/licenses/gpl-3.0/`;
  } else if (license === "MIT License") {
    link = `https://choosealicense.com/licenses/mit/`;
  } else if (license === "ISC License") {
    link = `https://choosealicense.com/licenses/isc/`;
  } else if (license === "BSD 2-Clause “Simplified” License") {
    link = `https://choosealicense.com/licenses/bsd-2-clause/`;
  } else {
    link = '';
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  console.log(license);
  switch (license) {
    case 'Apache 2.0 License':;
      return `This project is licensed under the Apache 2.0 License.`;
    case 'GNU General Public v3.0 License':;
      return `This project is licensed under the GNU General Public v3.0 License.`;
    case 'MIT License':;
      return `This project is licensed under the MIT License.`;
    case 'ISC License':;
      return `This project is licensed under the ISC License.`;
    case 'BSD 2-Clause “Simplified” License':;
      return `This project is licensed under the BSD 2-Clause “Simplified” License.`;
    default: console.error('No license found.');
      return ''; // No license provided
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);
  const link = renderLicenseLink(data.license);
  const section = renderLicenseSection(data.license);

  return `
  # ${data.title}

  ${badge}

  ## Description

  ${data.desc}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Instructions](#instructions)
  - [Tests](#tests)
  - [Questions](#questions)
  - [Credits](#credits)
  - [License](#license)

  ## Installation

  ${data.inst}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.conGid}

  ## Instructions

  ${data.inst}

  ## Tests

  Test the code by running the index.js and checking if the SAMPLE.md file is generated corrected based on the different inputs

  ## Questions

  Do you wish to contact me? My Github is listed here:
  https://github.com/${data.github}

  Do you have any further questions? Feel free to contact me by email here: ${data.email}

  ## Credits

  Template README.md was formatted based on the template provided by the [Guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)

  [Licenses](https://choosealicense.com) were chosen based on the choose a license website

  [Badges](https://shields.io/) were selected based on what was found and sourced on shields.io

  ## License
  
  ${section}
  View more about the license here in the link below:
  - ${link}
  `;
}

export default generateMarkdown;  