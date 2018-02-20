// Write a function sub that is
//  generalized for any
//   amount of arguments

function sub(...nums) {
  return nums.reduce((total, curry) => {
    return total - curry;
  });
}

console.log(sub(1, 2, 4));

console.log('***********************************');

function sub_one(...nums) {
  res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    res -= nums[i];
  }
  return res;
}

console.log(sub_one(1, 2, 4));
