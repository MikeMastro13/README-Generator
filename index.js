const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your projects title?"
    },
    {
        type: "input",
        name: "version",
        message: "What version of the project is this?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the project about?"
    },
    {
        type: "input",
        name: "instructions",
        message: "How do you install this project?"
    },
    {
        type: "input",
        name: "usage",
        message: "What is the main purpose of this program?"
    },
    {
        type: "input",
        name: "license",
        message: "What is the license for this program?"
    },
    {
        type: "input",
        name: "author",
        message: "Who contributed to this project?"
    },
    {
        type: "input",
        name: "profile",
        message: "What is your GitHub profile name?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the email associated with your GitHub account?"
    }
];

function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, (err) => {
        console.log(data);
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    })
}

function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        writeToFile("README.md", generateMarkdown(inquirerResponses));
    })
}

init();
