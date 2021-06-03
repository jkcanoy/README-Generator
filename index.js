// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile)

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is your project's title?"
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief description of your project"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the step required to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instuctions on how to use your project and examples"
    },
    {
        type: "list",
        name: "projectLicense",
        message: "Choose the appropriate license for this project. For more information refer to https://choosealicense.com/",
        choices:[
            "agpl-3.0",
            "gpl-3.0",
            "lgpl-3.0",
            "mpl-2.0",
            "apache-2.0",
            "mit",
            "bsl-1.0",
            "unilicense",
            "N/A"
        ] 
    },
    {
        type: "input",
        name: "contributing",
        message: "If applicable, how would you like other developers to contribute?",
        default: ""
    },
    {
        type: "input",
        name: "test",
        message: "Does your project have any tests? If so, provide examples on how to run them",
        default: ""
    },
    {
        type: "input",
        name: "github",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "email",
        message:"What is your email?"
    }
])
// TODO: Create a function to write README fileß
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
