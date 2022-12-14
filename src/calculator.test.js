const sum = require("./calculator");

describe.each([
  [5, 5, 10],
  [7, 3, 10],
  [27, 46, 73],
])(`calculates sum correct for %i and %i`, (a, b, expected) => {
  test(`returns ${expected}`, () => {
    expect(a + b).toBe(expected);
  });
});

test("calculates the correct sum result", () => {
  expect(sum(5, 5)).toBe(10);
});

test("calculates the correct sum result again", () => {
  expect(sum(7, 3)).toBe(10);
});

test("calculates the correct sum for new product prices", () => {
  expect(sum(27, 46)).toBe(73);
});

test("calculates the correct sum for variety of products", () => {
  expect(sum(5, 8, 12)).toBe(25);
});
