export function addTwoDigits(n: any): number {
  const toNums = n.toString().split("");
  return toNums.reduce((num1: string, num2: string) => {
    return parseInt(num1) + parseInt(num2);
  });
}

console.log(addTwoDigits(29));

/*
**Hint**
-   split()
-   parseInt()
-   toString()
-   reduce()
*/
