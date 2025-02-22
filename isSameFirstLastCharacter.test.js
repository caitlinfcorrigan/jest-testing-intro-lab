const isSameFirstLastCharacter = require("./isSameFirstLastCharacter");

// Base Cases

/* A test case for a string that does have the same first and last 
   character and is 4+ characters long
*/
test("it should return true when the first and last character are the same", () => {
  expect(isSameFirstLastCharacter("abbbbba")).toBe(true);
});

/* A test case for a string that does NOT have the same first and last 
   character and is 4+ characters long
*/
test("it should return false when the first and last character are different", () => {
   expect(isSameFirstLastCharacter("aaabbb")).toBe(false)
});

// Edge Cases
// A test case for a string with only 2 characters that are different
test("it should return false when the string is two letters, which are diff", () => {
   expect(isSameFirstLastCharacter("ab")).toBe(false);
});

// A test case for a string with only 2 characters that are the same
test("it should return true when the string is two letters, which are the same", () => {
   expect(isSameFirstLastCharacter("aa")).toBe(true);
});

// A test case for a string with only 1 character
test("it should return true when the string is one letter (the first and last are the same)", () => {
   expect(isSameFirstLastCharacter("a")).toBe(true);
});

// A test case for an empty string
test("it should return false because the (nonexistant) letters are not different", () => {
   expected(isSameFirstLastCharacter("")).toBe(true);
});
