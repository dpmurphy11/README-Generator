//Include packages needed for this application
const inq = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'user',
    message: 'What is your GitHub username?',
}, {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
}, {
    type: 'input',
    name: 'title',
    message: 'Wat is the title for your project?',
    default: 'My Project',
}, {
    type: 'input',
    name: 'desc',
    message: 'Please write a description for your project?',
},{
    type: 'list',
    name: 'license',
    message: 'Please choose a license.',
    choices: ['None', 'Apache', 'BSD', 'Eclipse', 'GNU GPL v3', 'GNU GPL v2', 'IBM', 'ISC', 'MIT', 'Mozilla', 'Unlicense'],
    default: 'None',
}, {
    type: 'input',
    name: 'install',
    message: 'What command should be run to install dependencies',
    default: 'npm i',
},  {
    type: 'input',
    name: 'test',
    message: 'What command should be run to run tests?',
    default: 'npm test'
},  {
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using the repo?',
},  {
    type: 'input',
    name: 'contribute',
    message: 'What does the user need to know about contributing to the repo?',
}
];

//  Create a function to write README file
let writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(`Unable to save file. ${err}`) : console.log('The file has been saved!');
    })
};

// Create a function to initialize app
let init = () => {
    inq.prompt(questions).then((answers) => {
        let output = generateMarkdown(answers);
        writeToFile('./output/README.md', output);
    });
}

// Function call to initialize app
init();
