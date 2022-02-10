

function generateREADME(data) {
    return `
# ${data.title}
![License](https://img.shields.io/badge/License-${data.license}-blue.svg)]


## Description

${data.description}
- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?


## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [How to Contribute](#contribution)
- [Tests](#test)
- [Questions](#email)
- [License](#license)


## Installation

${data.installation}


## Usage
${data.usage}


## How to Contribute

Contributions, issues and feature requests are welcome.
Feel free to check [issues page]${data.contribution} if you want to contribute.


## Tests

${data.test}
Go the extra mile and write tests for your application. Then provide examples on how to run them here.


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