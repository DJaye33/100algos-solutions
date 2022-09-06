export function sumAllPrimes(num: number): number {
  let primesTotal = 0;

  for (let index = 2; index < num; index++) {
    for (let jIndex = 2; jIndex <= index; jIndex++) {
      if (index === jIndex) {
        primesTotal += index;
      }

      if (index % jIndex === 0) {
        break;
      }
    }
  }

  return primesTotal;
}

console.log(sumAllPrimes(10));
console.log(sumAllPrimes(977));
