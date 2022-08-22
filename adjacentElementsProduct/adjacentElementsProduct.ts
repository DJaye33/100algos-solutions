export function adjacentElementsProduct(inputArray: number[]): number {
  let product = 0;
  inputArray.forEach((val, indx, arr) => {
    if (val * arr[indx + 1] > product) {
      product = val * arr[indx + 1];
    } else {
      product = product;
    }
  });
  return product;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
