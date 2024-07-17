function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: "Ali", age: 17 };
      resolve(data);
    }, 3000);
  });
}

async function callMe() {
  try {
    const data = await new getData();
    console.log("Data", data);
  } catch (error) {
    console.error("Error", error);
  }
}

callMe();
