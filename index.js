// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path'
import generateMarkdown from './utils/generateMarkdown.js';
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Provide a short description explaining what was your motivation, why did you build it, and what problem does it solve? : ",
        name: "desc"
    },
    {
        type: "input",
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running: ",
        name: "inst"
    },
    {
        type: "input",
        message: "How will this project be used?",
        name: "usage"
    },
    {
        type: "input",
        message: "Please list contribution guidelines. If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so: ",
        name: "conGid"
    },
    {
        type: "input",
        message: "Please provide instructions on how to run this project. If applicable, please provide notable examples: ",
        name: "test"
    },
    {
        type: "list",
        message: "Please choose a license: ",
        name: "license",
        choices: [ "Apache 2.0 License", "GNU General Public v3.0 License", "MIT License", "ISC License", "BSD 2-Clause “Simplified” License"]
    },
    {
        type: "input",
        message: "Please include your Github username : ",
        name: "github"
    },
    {
        type: "input",
        message: "Please include your email: ",
        name: "email"
    },
];

// TODO: Create a function to write README file
function writeFile(fileName, data, err) {
    if (err) {
        console.error("File did not run correctly. Check error log and try again.", err)
    }
    console.log("Project File executed correctly")
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions).then(response => {
            console.log('Generating..');
            writeFile('Sample_README.md', generateMarkdown({ ...response }));

        })
}

// Function call to initialize app
init();
