const fs = require("fs");
// const axios = require("axios"); not needed 
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your Github username?",
        name: "github"
    }, {
        type: "input",
        message: "What is your email address?",
        name: "email"
    }, {
        type: "input",
        message: "What is your project's title?",
        name: "title"
    }, {
        type: "input",
        message: "Please write a short description of your project.",
        name: "description"
    }, {
        type: "input",
        message: "What command should be executed to install dependencies?",
        name: "installation",
        default: "npm install"
    }, {
        type: "input",
        message: "What command should be executed to run tests?",
        name: "test",
        default: "npm test"
    }, {
        type: "input",
        message: "What does the user need to know about using this repository?",
        name: "usage"
    }, {
        type: "input",
        message: "What does the user need to know about contributing to this repository?",
        name: "contributing"
    }, {
        type: "list",
        message: "What license should your project have?",
        name: "license",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    }
];
// function to write README file
function writeToFile(fileName, data) {
    //use fs to write to file
    fs.writeFile(path.join(process.cwd(), fileName), data, function (err) {
        if (err) throw err;
    })

}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            //execute the write function with inquirer answers
            console.log(answers);
            writeToFile("README.md", generateMarkdown(answers));
        })
}

// function call to initialize program
init();
