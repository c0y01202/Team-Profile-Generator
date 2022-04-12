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
            "Engineer",
            "Manager",
            "No more team members are needed.",
          ],
        },
      ])
      .then(function (userInput) {
        switch (userInput.addEmployeePrompt) {
          case "Intern":
            addIntern();
            break;
          case "Engineer":
            addEngineer();
            break;
          case "Manager":
            addIntern();
            break;

          default:
            htmlBuilder();
        }
      });
  }
  //  Questions for Inquirer

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
          name: "engineerName",
          message: "What is the engineer's name?",
        },

        {
          type: "input",
          name: "engineerId",
          message: "What is the engineer's employee ID number?",
        },

        {
          type: "input",
          name: "engineerEmail",
          message: "What is the engineer's email address?",
        },

        {
          type: "input",
          name: "engineerGithub",
          message: "What is the engineer's GitHub username?",
        },
      ])
      .then((answers) => {
        const Engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGithub
        );
        teamArray.push(Engineer);
        createTeam();
      });
  }

  function addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "Manager",
          message: "What is the manager's name?",
        },

        {
          type: "input",
          name: "ManagerId",
          message: "What is the manager's employee ID number?",
        },

        {
          type: "input",
          name: "MnagerEmail",
          message: "What is the manager's email address?",
        },

        {
          type: "input",
          name: "ManagerResume",
          message: "What is the linkedin address for the product manager?",
        },
      ])
      .then((answers) => {
        const Manager = new Manager(
          answers.ManagerName,
          answers.ManagerId,
          answers.ManagerEmail,
          answers.ManagerResume
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
