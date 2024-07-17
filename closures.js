function counter() {
  let count = 0;

  function increment(num) {
    if (num === 0) {
      count = 0;
    } else {
      count += 1;
    }
    return count;
  }
  return {increment};
}

let count = counter();

console.log(count.increment());
console.log(count.increment());
console.log(count.increment(0));
console.log(count.increment());
