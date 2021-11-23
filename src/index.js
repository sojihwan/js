function countBiggerThanTen(numbers) {
  const sum = numbers.reduce((acc, cur) => {
    if (cur > 10) {
      acc++;
    }
    return acc;
  }, 0);
  return sum;
}

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count);
