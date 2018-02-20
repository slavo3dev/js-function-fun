// Write a function
// min that is generalized
// for any amount of arguments

function min(...nums) {
  return nums.reduce((total, num) => {
    return total < num ? total : num;
  });
}

console.log(min(1, 2, 4));
