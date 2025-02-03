console.log("welcome to fsdi 104");

let globalVariable = "I am a global variable"

function example() {    
    let localVariable = "I am a local variable"
    console.log(globalVariable);
    console.log(localVariable);
}
//arrays
let fruits= ["apple", "bannana", "orange"];
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[0]);

//changes the specific block
fruits[1]="cherry"

//array length (see how many are in that array)
console.log(fruits.length);
//adding and removing from list
fruits.push("grapes")//add to the end
console.log(fruits);
fruits.pop()//removes the last one
fruits.pop()
console.log(fruits);
fruits.unshift("kiwi")// adds to the begining
console.log(fruits);
fruits.shift()//removes from begining
console.log(fruits);


/*chalenge
1. create array of student names
2. use for loop to iterate through the array
3. log each student name*/

let studentsName = ["jeff", "mike", "victor", "james", "larry"];
for (let i = 0; i <= studentsName.length; i++) {
    console.log(studentsName[i]);
    
}

console.log("------objects-------");

//Objects (a collection of key value pairs. it allows you to group related data together in a structure way.)
/* 
let objectName = {
    key1: value1,
    key2: value2,
    key3: value3
}
*/
let person={
    name: "mike",//string
    lastName: "scott",//string
    age: 40,//number
    isStudent: false//boullon
}
console.log(`their name is ${person.name}`);
console.log(person.lastName);
console.log(person.age);
console.log(person.isStudent);

let student1={
    name: "mike",
    email: "mike@gmail.com",
    age: 40,
    address: "123 a st."
}
let student2={
    name: "james",
    email: "scott@gmail.com",
    age: 40,
    address: "23 c ST."
}
let student3={
    name: "luck",
    email: "luck@gmail.com",
    age: 40,
    address: "295 L st"
}
//array with objects
let studentList=[student1/*postion 0 */, student2/*postion 1 */, student3/*postion 2 */];
// show on console log
console.log(studentList[1].email);

function getStudentNames() {
    let list =document.getElementById("studentsName")
    for(let i= 0; i<studentList.length; i++) {
        console.log(studentList[i].name);
        list.innerHTML += `<p> ${studentList[i].name} </p>`
    }
}
getStudentNames();


document.getElementById("studentCounter").innerHTML = studentList.length;




