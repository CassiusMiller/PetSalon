let petSalon = {
    name: "Clean pets",
    address: {
        street:"1213 f st.",
        street2: "unit 100",
        city: "San Diego",
        state:"Ca",
        zip: "92101-0100"
    }
}


// Object constructor

function Student(name,email,age){
    //properties = values
    this.name = name;
    this.email=email;
    this.age = age;
}

// creating the object

// let objName = new Constructor("value1","value2","value3");
let student1 = new Student("Leo","lmiranda@sdgku.edu",80);

console.log(student1);

let student2 = new Student("james","scott@gmail.com",40);
let student3 = new Student("luck","luck@gmail.com",41);

