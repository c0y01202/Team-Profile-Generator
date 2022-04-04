const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const generateTeam = require("./src/template.js");

teamArray = [];

function runApp() {
  function createTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "What type of employee would you like to add to your team?",
          name: "addEmployeePrompt",
          choices: [
            "Intern",
            "Software Developer",
            "Product Manager",
            "No more team members are needed.",
          ],
        },
      ])
      .then(function (userInput) {
        switch (userInput.addEmployeePrompt) {
          case "Intern":
            addIntern();
            break;
          case "Software Engineer":
            addEngineer();
            break;
          case "Product Manager":
            addIntern();
            break;

          default:
            htmlBuilder();
        }
      });
  }
  // OOP Functions

  function addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is the manager's name?",
        },

        {
          type: "input",
          name: "internId",
          message: "What is the manager's employee ID number?",
        },

        {
          type: "input",
          name: "internEmail",
          message: "What is the manager's email address?",
        },

        {
          type: "input",
          name: "internOfficeNumber",
          message: "What is the intern's office number?",
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internOfficeNumber
        );
        teamArray.push(intern);
        createTeam();
      });
  }

  function addSofwareEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "softwareengineerName",
          message: "What is the engineer's name?",
        },

        {
          type: "input",
          name: "softwareengineerId",
          message: "What is the engineer's employee ID number?",
        },

        {
          type: "input",
          name: "softwareengineerEmail",
          message: "What is the engineer's email address?",
        },

        {
          type: "input",
          name: "softwareengineerGithub",
          message: "What is the software engineer's GitHub username?",
        },
      ])
      .then((answers) => {
        const softwareEngineer = new softwareEngineer(
          answers.softwareengineerName,
          answers.softwareengineerId,
          answers.softwareengineerEmail,
          answers.softwareengineerGithub
        );
        teamArray.push(softwareEngineer);
        createTeam();
      });
  }

  function addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "productManager",
          message: "What is the product manager's name?",
        },

        {
          type: "input",
          name: "productManagerId",
          message: "What is the product manager's employee ID number?",
        },

        {
          type: "input",
          name: "productMAnagerEmail",
          message: "What is the product manager's email address?",
        },

        {
          type: "input",
          name: "productManagerResume",
          message: "What is the linkedin address for the product manager?",
        },
      ])
      .then((answers) => {
        const productManager = new productManager(
          answers.productManagerName,
          answers.productManagerId,
          answers.productManagerEmail,
          answers.productManagerResume
        );
        teamArray.push(intern);
        createTeam();
      });
  }

  // return to menu with option to add another team member create team

  // Would you like to add a team member?
  // Yes || No
  // If Yes --> Then select an employee role for your new team member: Manager, Engineer, Intern
  // If No --> Create Team

  function htmlBuilder() {
    console.log("Team created!");

    fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8");
  }

  createTeam();
}

runApp();
