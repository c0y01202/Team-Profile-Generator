const Intern = require("../lib/intern.js");

test("Can create school.", () => {
  const testSchool = "School Name";
  const employeeInstance = new Intern(
    "Claudia",
    100,
    "cchttim10101@gmail.com",
    testSchool
  );
  expect(employeeInstance.school).toBe(testSchool);
});

test("Testing officeNumber will return office number.", () => {
  const testSchool = "School Name";
  const employeeInstance = new Intern(
    "Claudia",
    100,
    "cchittim10101@gmail.com",
    testSchool
  );
  expect(employeeInstance.getSchool()).toBe(testSchool);
});

test("Testing role.", () => {
  const returnValue = "Intern";
  const employeeInstance = new Intern(
    "Claudia",
    100,
    "cchittim10101@gmail.com",
    "School Name"
  );
  expect(employeeInstance.getRole()).toBe(returnValue);
});
