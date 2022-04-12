const Employee = require("../lib/engineer");

test("Can create a github.", () => {
  const testGithub = "c0y01202";
  const employeeInstance = new Engineer(
    "Claudia",
    2,
    "cchittim10101@gmail.com",
    testGithub
  );
  expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
  const testGithub = "c0y01202";
  const employeeInstance = new Engineer(
    "Claudia",
    2,
    "cchittim10101@gmail.com",
    testGithub
  );
  expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
  const returnValue = "Engineer";
  const employeeInstance = new Engineer(
    "Claudia",
    2,
    "cchittim10101@gmail.com",
    "c0y01202"
  );
  expect(employeeInstance.getRole()).toBe(returnValue);
});
