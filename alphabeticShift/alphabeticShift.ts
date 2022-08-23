export function alphabeticShift(inputString: string): string {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  const intoArray = inputString.split("");

  const shifted: string[] = [];

  for (let char of intoArray) {
    if (alphabet[alphabet.indexOf(char)] === "z") {
      shifted.push("a");
    } else if (alphabet.indexOf(char) !== -1) {
      shifted.push(alphabet[alphabet.indexOf(char) + 1]);
    }
  }

  return shifted.join("");
}

console.log(alphabeticShift("crazy"));
