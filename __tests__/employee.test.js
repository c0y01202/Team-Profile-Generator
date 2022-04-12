const Employee = require("../lib/employee");

test("Can create an new employee.", () => {
  const employeeInstance = new Employee();
  expect(typeof employeeInstance).toBe("object");
});

test("Testing name.", () => {
  const name = "Claudia";
  const employeeInstance = new Employee(name);
  expect(employeeInstance.name).toBe(name);
});

test("Testing ID.", () => {
  const id = 2;
  const employeeInstance = new Employee("Claudia", id);
  expect(employeeInstance.id).toBe(id);
});

test("Testing email.", () => {
  const email = "cchittim10101@gmail.com";
  const employeeInstance = new Employee("Claudia", 2, email);
  expect(employeeInstance.email).toBe(email);
});

test("Gets name through getName method.", () => {
  const testName = "Claudia";
  const employeeInstance = new Employee(testName);
  expect(employeeInstance.getName()).toBe(testName);
});

test("Can test ID through getID method.", () => {
  const testID = 2;
  const employeeInstance = new Employee("Claudia", testID);
  expect(employeeInstance.getId()).toBe(testID);
});

test("Can test email through getEmail method.", () => {
  const testEmail = "jamesljenks@gmail.com";
  const employeeInstance = new Employee("James", 2, testEmail);
  expect(employeeInstance.getEmail()).toBe(testEmail);
});

test("Testing role.", () => {
  const returnValue = "Employee";
  const employeeInstance = new Employee("James", 2, "jamesljenks@gmail.com");
  expect(employeeInstance.getRole()).toBe(returnValue);
});

//jest.mock("../lib/employee.js");

//test("creates an employee object", () => {
// const employee = new Employee("Claudia");

// expect(employee.name).toBe("Claudia");
// expect(employee.ID).toEqual(expect.any(Number));
//expect(employee.email).toEqual(expect.any(e-mail));
//expect(employee.officenumber).toEqual(expect.any(Number));
// );
//});

//test("gets employee's information as an object", () => {
//const employee = new Employee("Claudia");

//expect(employee.getStats()).toHaveProperty("employee.ID");
//expect(employee.getStats()).toHaveProperty("email");
//expect(employee.getStats()).toHaveProperty("office number");
//});
