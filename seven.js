// Write a function add that is
// generalized for any amount of arguments

function add(...num) {
  res = 0;
  for (i in num) {
    res += num[i];
  }
  return res;
}

console.log(add(1, 2, 3, 4, 5, 6));

console.log('-----------------------------');

function add_one(...nums) {
  return nums.reduce((total, curr) => {
    return total + curr;
  }, 0);
}

console.log(add_one(1, 2, 3, 4, 5, 6));
