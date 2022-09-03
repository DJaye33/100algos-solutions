export function arrayPreviousLess(items: number[]): number[] {
  const lessArr: number[] = [];

  for (let index = items.length - 1; index >= 0; index--) {
    if (index === 0) {
      lessArr.unshift(-1);
    } else if (items[index] > items[index - 1]) {
      lessArr.unshift(items[index - 1]);
    } else {
      lessArr.unshift(-1);
    }
  }
  return lessArr;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
