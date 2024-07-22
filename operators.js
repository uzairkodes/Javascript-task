function combineArray(arr1, arr2){
    const arr3 = [...arr1, ...arr2]
    console.log(arr3)
}
function extractProperties(obj){
    const {name, age, ...obj2} = obj;
    console.log(obj2);
}

const arr1 = [1,2,3];
const arr2 = [4,5,6]

combineArray(arr1, arr2);

const obj = {name: "ali", age: "17", Gender: "M", Locaiton: "Sukkur"};

extractProperties(obj);


