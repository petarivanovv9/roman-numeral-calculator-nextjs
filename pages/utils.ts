interface NaturalToRomanMap {
  [key: string]: number;
}

const naturalToRomanMapping: NaturalToRomanMap = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

const naturalToRoman = (num: number): string => {
  let res = '';

  for (const key in naturalToRomanMapping) {
    res += key.repeat(Math.floor(num / naturalToRomanMapping[key]));

    num %= naturalToRomanMapping[key];
  }

  return res;
};

export { naturalToRoman };
