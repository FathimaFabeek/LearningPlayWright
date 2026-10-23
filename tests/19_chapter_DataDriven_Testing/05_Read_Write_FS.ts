import fs from 'fs';//file systm
import path from 'path';

// Always build paths from __dirname. A bare './280_Users.json' resolves
// against the working directory, so it breaks when run from elsewhere.
const filePath = path.join(__dirname, '02_users.json');//here can read the JSON file
console.log('File path:', filePath);// to get the file from its path

const fileData = fs.readFileSync(filePath,'utf-8');//read it using fs module, std format
const userDataJSObject = JSON.parse(fileData);// convert it  into javascriptobject
console.log(userDataJSObject);

console.log(userDataJSObject.username);
console.log(userDataJSObject.password);
//it is the best way , bcz it can read and write the data. it can modify also

//writing Data to a JSON file,
const user={
    name:"Pramod",
    role:"QA Engineer"
};
//to convert into JSON
const jsonData=JSON.stringify(user);
fs.writeFileSync("output.json",jsonData);
console.log("JSON file created succesfully");
