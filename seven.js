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
