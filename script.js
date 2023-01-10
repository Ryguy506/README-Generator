const inquirer = require('inquirer');
const fs = require('fs');


inquirer.prompt([
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of this project?'

    },

    {
        type: 'input',
        name: 'Description',
        message: 'Describe your project.'

    },

    {
        type: 'input',
        name: 'Installation',
        message: 'What are the steps required to install your project?'

    },

    {
        type: 'input',
        name: 'Usage',
        message: 'Provide instructions and examples for use.'

    },
    {
        type: 'list',
        name: 'License',
        message: 'What license do you want for this project?',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']

    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'How can others contribute to this project?'

    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Write tests for your application.'

    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'What is your GitHub username?'

    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is your email address?'
    }



]).then((data) => {
            if (data.License === 'MIT') {
                Badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
                LicenseDesc = 'Licensed under the MIT License; \n you may not use this file except in compliance with the License. \n You may obtain a copy of the License at \n \n https://opensource.org/licenses/MIT'
            } else if (data.License === 'Apache 2.0') {
                Badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
                LicenseDesc = 'Licensed under the Apache License, Version 2.0; \n you may not use this file except in compliance with the License. \n You may obtain a copy of the License at \n \n http://www.apache.org/licenses/LICENSE-2.0'
            } else if (data.License === 'GPL 3.0') {
                Badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
                LicenseDesc = 'Licensed under the GNU General Public License v3.0; \n you may not use this file except in compliance with the License. \n You may obtain a copy of the License at \n \n https://www.gnu.org/licenses/gpl-3.0.en.html'
            } else if (data.License === 'BSD 3') {
                Badge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
                LicenseDesc = 'Licensed under the BSD 3-Clause License; \n you may not use this file except in compliance with the License. \n You may obtain a copy of the License at \n \n https://opensource.org/licenses/BSD-3-Clause'

            } else {
                Badge = ''
                LicenseDesc = ''
            }
      
    fs.writeFile("README.md", generateReadMe(data), (err) =>
        err ? console.log(err) : console.log('Success!')
    );
});

function generateReadMe(data) {
    console.log(data);
    return `# ${data.Title}

## Description      
${data.Description}

${Badge}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Credits](#credits)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.Installation}

## Usage
${data.Usage}

## License
### ${data.License}
${LicenseDesc} 

## Contributing
${data.Contributing}

## Tests
${data.Tests}

## Questions
https://github.com/${data.GitHub}
${data.Email}
`;
}
