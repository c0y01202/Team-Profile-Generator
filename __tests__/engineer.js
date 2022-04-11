const productManager = require("../lib/engineer.js");

test("Can create an new employee.", () => {
  const employeeInstance = new Engineer();
  expect(typeof employeeInstance).toBe("object");
});

test("Testing name.", () => {
  const name = "Claudia";
  const employeeInstance = new Engineer(name);
  expect(employeeInstance.name).toBe(name);
});

test("Testing ID.", () => {
  const id = 2;
  const employeeInstance = new Engineer("Claudia", id);
  expect(employeeInstance.id).toBe(id);
});

test("Testing email.", () => {
  const email = "testing@test.com";
  const employeeInstance = new Engineer("Claudia", 2, email);
  expect(employeeInstance.email).toBe(email);
});

test("Gets name through getName method.", () => {
  const testName = "Claudia";
  const employeeInstance = new Engineer(testName);
  expect(employeeInstance.getName()).toBe(testName);
});

test("Can test ID through getID method.", () => {
  const testID = 2;
  const employeeInstance = new Engineer("Claudia", testID);
  expect(employeeInstance.getId()).toBe(testID);
});

test("Can test email through getEmail method.", () => {
  const testEmail = "test@testing.com";
  const employeeInstance = new Engineer("Claudia", 2, testEmail);
  expect(employeeInstance.getEmail()).toBe(testEmail);
});

test("Testing role.", () => {
  const returnValue = "Engineer";
  const employeeInstance = new Engineer("Claudia", 2, "test@testing.com");
  expect(employeeInstance.getRole()).toBe(returnValue);
});
