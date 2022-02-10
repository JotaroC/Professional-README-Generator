// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
const inquirer = require('inquirer');
const fs = require('fs');
const generator = require('./assets/generateREADME');

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please enter the description of this project.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please enter the Installation information.',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please enter the Usage information.',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Please enter the contribution information.',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please select the license.',
        choices: ['Apache 2.0 License', 'Boost Software License 1.0', 'The MIT License']
      },
      {
        type: 'input',
        name: 'test',
        message: 'Please enter the Test information.',
      },
      {
        type: 'input',
        name: 'questions',
        message: 'Please enter the Question information.',
      },
    ]);
};

const init = () => {
    promptUser()
      // Use writeFileSync method to use promises instead of a callback function
      .then((data) => fs.writeFileSync('README.md', generator(data)))
      .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
  };
  
init();
