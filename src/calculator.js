function sum(...numbers) {
  let count = 0;
  for (const num of numbers) {
    count += num;
  }
  return count;
}
module.exports = sum;
