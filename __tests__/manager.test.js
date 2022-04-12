const Manager = require("../lib/manager");

test("Can create an office number.", () => {
  const testOfficeNumber = 101;
  const employeeInstance = new Manager(
    "Claudia",
    101,
    "cchittim10101@gmail.com",
    testOfficeNumber
  );
  expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

test("Testing officeNumber will return office number.", () => {
  const testOfficeNumber = 101;
  const employeeInstance = new Manager(
    "Claudia",
    101,
    "cchittim10101@gmail.com",
    testOfficeNumber
  );
  expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Testing role.", () => {
  const returnValue = "Manager";
  const employeeInstance = new Manager(
    "Claudia",
    101,
    "cchittim10101@gmail.com",
    2
  );
  expect(employeeInstance.getRole()).toBe(returnValue);
});
