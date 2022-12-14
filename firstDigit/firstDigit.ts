export function firstDigit(inputString: string): string {
  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const chars = inputString.split("");

  for (let index = 0; index < inputString.length; index++) {
    if (digits.includes(inputString[index])) {
      return inputString[index];
    }
  }
}

console.log(firstDigit("var_1__Int"));
console.log(firstDigit("q2q-q"));
console.log(firstDigit("0ss"));
