import {sum, subtract, multiply, divide } from './calc';
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
test('subtracts 10 - 2 to equal 8', () => {
    expect(subtract(10, 2)).toBe(8);
  });
  test('multiply 5 by 5 to equal 25', () => {
    expect(multiply(5, 5)).toBe(25);
  });
  test('divide 10 by 2 to equal 5', () => {
    expect(divide(10, 2)).toBe(5);
  });