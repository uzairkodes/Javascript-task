const card = {
  name: "Ali",
  age: "17",
};

const json = JSON.stringify(card);
console.log("JSON:", json);

const parse = JSON.parse(json);
console.log("Parsed:", parse);

console.log("Title:", parse.name);
