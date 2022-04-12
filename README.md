# Team-Profile-Generator

This assignment required use of testing Javascript code using node.js in the application terminal. The purpose of this assignment is to create a Javascript application that builds an employee database for 4 types of employees: a general employee, an intern, an engineer and a manager. Building a repository and linking it to the coding terminal was the first step in building this application. The second step was to build files in a Test folder and then test each file using Jest for each employee type. Within each file is are Javascript functions which ask the following categories of information for each type of employee: name, office number, e-mail address, school and in some cases a GitHub profile link. The application uses Inquirer for collecting input from the end-user. Each file was tested using Jest prior to launching Inquirer.

# Using Jest to Test Application Code

The following video link demonstrates files being tested using Jest in Visual Studio: https://drive.google.com/file/d/1F7VONBrdNjDdi5t4YHxB3MPb6brHaG2P/view

# Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
