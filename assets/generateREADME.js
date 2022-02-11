

function generateREADME(data) {
    return `
# ${data.title}
![License](https://img.shields.io/badge/License-${data.license}-blue.svg)


## Description

${data.description}


## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contribute)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)


## Installation

${data.installation}


## Usage
${data.usage}


## Contribute

Contributions, issues and feature requests are welcome.
Feel free to check [issues page](${data.contribution}) if you want to contribute.


## Tests

${data.test}



## Questions

Free feel to approach me if you have any further questions or anything want to discuss.
- checkout my [GitHub profile](https://github.com/${data.github})
- Contact me via [Email](mailto:${data.email})


## License

Copyright© 2022 ${data.github}.
This project is ${data.license} licensed.
    `
}

module.exports = generateREADME;