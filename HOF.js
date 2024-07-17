function printNameAge(obj){
   const {name, gender, age} = obj;
   console.log("Name: ", name);
   console.log("Age: ", age);
   printGender(gender)
}

function printGender(gender){;
    console.log("Gender: ", gender);
 }


const obj = {name: "Ali", gender: "M", age: 17};

printNameAge(obj);
