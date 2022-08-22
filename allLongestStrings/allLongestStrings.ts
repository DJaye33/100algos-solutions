export function allLongestStrings(inputArray: string[]): string[] {
  const longest = [inputArray[0]];

  for (let indx = 1; indx < inputArray.length; indx++) {
    if (inputArray[indx].length >= longest[0].length) {
      longest.push(inputArray[indx]);
    }
  }

  return longest;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
