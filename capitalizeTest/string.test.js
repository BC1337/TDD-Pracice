const string = require('./string');

test('returns string capitalized', () => {
  expect(string.charAt(0).toUpperCase() + string.slice(1));
});