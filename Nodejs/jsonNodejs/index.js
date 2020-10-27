const fs = require("fs");

const bioData = {
  name: "Pravin",
  age: 22,
  college: "A.P.Shah Institute Of Technology",
};

//console.log(bioData.college);

// const jsonData = JSON.stringify(bioData);
// console.log(jsonData);

// const objData = JSON.parse(jsonData);
// console.log(objData);
// console.log(objData.college);

// 1. convert to json
// 2. Add to other File
// 3. readfile
// 4. again convert bak to obj original.Add
// 5.console show

const jsonData = JSON.stringify(bioData);
//console.log(jsonData);
//const orgData = JSON.parse(jsonData);
//console.log(orgData);
// fs.writeFile("json1.json", jsonData, (err) => {
//   console.log("done");
// });

fs.readFile("json1.json", "utf-8", (err, data) => {
  //console.log(data);
  const orgData = JSON.parse(data);
  console.log(data);
  console.log(orgData);
});
