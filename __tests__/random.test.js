const checkIfEqual = require("../lib/random.js");

test("checks if 10 is equal to 10", () => {
  expect(checkIfEqual(10, 10)).toBe(true);
});

module.exports = function (val1, val2) {
  if (val1 === val2) {
    return true;
  } else {
    return false;
  }
};
