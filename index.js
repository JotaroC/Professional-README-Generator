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
        type: 'list',
        name: 'license',
        message: 'Please select the license.',
        choices: ['Apache_2.0', 'Boost_1.0', 'MIT', 'GPL']
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Please enter the contribution information.',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Please enter your github username',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter your Email',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Please enter the Test information.',
      },
    ]);
};

const init = () => {
    promptUser()
      // Use writeFileSync method to use promises instead of a callback function
      .then((data) => fs.writeFileSync('README.md', generator(data)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };
  
init();
