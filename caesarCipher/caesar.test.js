import {caesarCipher} from './caesar';


// what we need to do

// convert all characters to numbers, a = 0, z = 25

// take a string and return it converted as a caesar cipher with an shift of 1 
// eg. a = b, b = c, ect.. 0 = 1, 1 = 2

test('encrypts text using ceasar cipher', () => {
    expect(caesarCipher('testing!', 0)).toBe('testing!');
  });


  test('encrypts text using ceasar cipher shift 1', () => {
    expect(caesarCipher('testing!', 1)).toBe('uftujoh!');
  });

  test('encrypts text using ceasar cipher shift 1', () => {
    expect(caesarCipher('testing!', 2)).toBe('vguvkpi!');
  });

  test('encrypts text using ceasar cipher shift 1', () => {
    expect(caesarCipher('testing!', 3)).toBe('whvwlqj!');
  });