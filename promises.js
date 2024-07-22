function promises(message, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, time);
  });
}

promises("First message", 1000)
  .then((message) => {
    console.log(message);
    return delay("Second message", 1000);
  })
  .then((message) => {
    console.log(message);
    return delay("Third message", 1000);
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
