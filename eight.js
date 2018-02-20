// Write a function sub that is
//  generalized for any
//   amount of arguments

function sub(...nums) {
  return nums.reduce((total, curry) => {
    return total - curry;
  });
}

console.log(sub(1, 2, 4));
