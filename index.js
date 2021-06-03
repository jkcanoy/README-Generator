// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
function questions() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project's title?",
    },
    {
      type: "input",
      name: "description",
      message: "Write a brief description of your project",
    },
    {
      type: "input",
      name: "installation",
      message: "What are the step required to install your project?",
    },
    {
      type: "input",
      name: "usage",
      message: "Provide instuctions on how to use your project and examples",
    },
    {
      type: "list",
      name: "projectLicense",
      message:
        "Choose the appropriate license for this project. For more information refer to https://choosealicense.com/",
      choices: [
        "GNU AGPLv3",
        "GNU GPLv3",
        "GNU LGPLv3",
        "Mozilla Public License 2.0",
        "Apache License 2.0",
        "MIT License",
        "N/A",
      ],
    },
    {
      type: "input",
      name: "contributing",
      message:
        "If applicable, how would you like other developers to contribute?",
      default: "",
    },
    {
      type: "input",
      name: "test",
      message:
        "Does your project have any tests? If so, provide examples on how to run them",
      default: "",
    },
    {
      type: "input",
      name: "github",
      message: "What is your github username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
  ]);
}

// TODO: Create a function to write README fileß
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    questions()
        .then((data) => writeFileAsync("./sample/sampleREADME.md", generateMarkdown(data)))
        .then(() => console.log("A sampleREADME has been written to your sample folder"))
        .catch((err) => console.error(err));
}
    


// Function call to initialize app
init();
