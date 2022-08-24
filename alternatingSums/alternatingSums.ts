export function alternatingSums(a: number[]): number[] {
  let lineOneWeight: number = 0;
  let lineTwoWeight: number = 0;

  for (let index = 0; index < a.length; index++) {
    if (index % 2 === 0) {
      lineOneWeight += a[index];
    } else {
      lineTwoWeight += a[index];
    }
  }

  return [lineOneWeight, lineTwoWeight];
}

console.log(alternatingSums([50, 60, 60, 45, 70]));

// **Example**

// For a = [50, 60, 60, 45, 70], the output should be
// alternatingSums(a) = [180, 105].
