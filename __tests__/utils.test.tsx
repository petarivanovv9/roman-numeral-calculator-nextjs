import { naturalToRoman } from '../utils';

describe('utils', () => {
  describe('naturalToRoman', () => {
    [
      {
        value: 0,
        expected: '',
      },
      {
        value: 1,
        expected: 'I',
      },
      {
        value: 8,
        expected: 'VIII',
      },
      {
        value: 9,
        expected: 'IX',
      },
      {
        value: 999,
        expected: 'CMXCIX',
      },
      {
        value: 417,
        expected: 'CDXVII',
      },
      {
        value: 760,
        expected: 'DCCLX',
      },
      {
        value: 174,
        expected: 'CLXXIV',
      },
    ].forEach(({ value, expected }) => {
      it(`should return ${expected} roman number when integer is ${value} `, () => {
        expect(naturalToRoman(value)).toEqual(expected);
      });
    });
  });
});
