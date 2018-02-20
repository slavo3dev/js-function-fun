// Write a function
// min that is generalized
// for any amount of arguments

function min(...nums) {
  return nums.reduce((total, num) => {
    return total < num ? total : num;
  });
}

console.log(min(1, 2, 4));

console.log('*********************');

function min_one(...nums) {
  return nums.reduce((result, num) => {
    return minb(result, num);
  }, Number.MAX_VALUE);
}

console.log(min_one(1, 2, 4));
