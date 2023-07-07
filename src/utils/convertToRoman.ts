export function convertToRomanNumber(num: number): string {
  if (num <= 0 || num > 3999) {
    throw new Error(
      "Invalid number. Please provide a positive whole number between 1 and 3999."
    );
  }

  const romanNumerals: [number, string][] = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  let resultValue = "";
  let remainingNum = num;

  for (const [value, symbol] of romanNumerals) {
    while (remainingNum >= value) {
      resultValue += symbol;
      remainingNum -= value;
    }
  }

  return resultValue;
}

// console.log(convertToRomanNumber(3999)); // o/p: "MMMCMXCIX"
