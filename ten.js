// Write a function
// mul that is generalized
// for any amount of arguments

function mul(...nums) {
  return nums.reduce((total, num) => {
    return total * num;
  });
}

console.log(mul(1, 2, 4));
