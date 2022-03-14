const reverseString = require('./reverse');

test('hello => elloh', () => {
  expect(reverseString("hello")).toBe("olleh");
});

test('idk => dki', () => {
    expect(reverseString("idk")).toBe("kdi");
  });

  test('1353151 => 1353151', () => {
    expect(reverseString("1353151")).toBe("1513531");
  });
  
  

