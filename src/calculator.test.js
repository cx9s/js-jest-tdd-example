const sum = require("./calculator");

test("calculates the correct sum result", () => {
  expect(sum(5, 5)).toBe(10);
});

test("calculates the correct sum result again", () => {
  expect(sum(7, 3)).toBe(10);
});

test("calculates the correct sum for new product prices", () => {
  expect(sum(27, 46)).toBe(73);
});
