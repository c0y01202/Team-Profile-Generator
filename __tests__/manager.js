const softwareEngineer = require("../lib/software_engineer.js");

test("Can create an new intern.", () => {
  const employeeInstance = new Manager();
  expect(typeof employeeInstance).toBe("object");
});

test("Testing name.", () => {
  const name = "Claudia";
  const employeeInstance = new Manager(name);
  expect(employeeInstance.name).toBe(name);
});

test("Testing ID.", () => {
  const id = 2;
  const employeeInstance = new Manager("Claudia", id);
  expect(employeeInstance.id).toBe(id);
});

test("Testing email.", () => {
  const email = "testing@test.com";
  const employeeInstance = new Manager("Claudia", 2, email);
  expect(employeeInstance.email).toBe(email);
});

test("Gets name through getName method.", () => {
  const testName = "Claudia";
  const employeeInstance = new Manager(testName);
  expect(employeeInstance.getName()).toBe(testName);
});

test("Can test ID through getID method.", () => {
  const testID = 2;
  const employeeInstance = new Manager("Claudia", testID);
  expect(employeeInstance.getId()).toBe(testID);
});

test("Can test email through getEmail method.", () => {
  const testEmail = "test@testing.com";
  const employeeInstance = new Manager("Claudia", 2, testEmail);
  expect(employeeInstance.getEmail()).toBe(testEmail);
});

test("Testing role.", () => {
  const returnValue = "Manager";
  const employeeInstance = new Manager("Claudia", 2, "test@testing.com");
  expect(employeeInstance.getRole()).toBe(returnValue);
});
