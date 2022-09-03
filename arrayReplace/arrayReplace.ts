export function arrayReplace(
  inputArray: number[],
  elemToReplace: number,
  substitutionElem: number
): number[] {
  return inputArray.map((arrEl) => {
    if (arrEl === elemToReplace) {
      return substitutionElem;
    } else {
      return arrEl;
    }
  });
}

console.log(arrayReplace([1, 2, 1], 1, 3));
