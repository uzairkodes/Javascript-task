function* evenNumber() {
  yield 2;
  yield 4;
  yield 6;
  yield 8;
  yield 10;
}

const iterator = evenNumber();

let result = iterator.next();

while (!result.done) {
  console.log(result.value);
  result = iterator.next();
}
