export function alphabetSubsequence(s: string): boolean {
  const chars: string[] = s.split("");
  const charValues: number[] = [];

  chars.forEach((char: string) => {
    charValues.push(char.charCodeAt(0));
  });

  if (new Set(charValues).size !== charValues.length) {
    return false;
  }

  for (let index = 0; index < charValues.length - 1; index++) {
    if (charValues[index] >= charValues[index + 1]) {
      return false;
    }
  }

  return true;
}

// console.log(alphabetSubsequence('zab'))
// console.log(alphabetSubsequence("effg"));
// console.log(alphabetSubsequence('cdce'))
// console.log(alphabetSubsequence('ace'))
// console.log(alphabetSubsequence('bxz'))
