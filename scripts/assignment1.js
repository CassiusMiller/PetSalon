console.log("test");//make sure i linked it correctly
//add 3 pets
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
let pet1={
    Name: "Spike",
    Age: 3,
    Gender: "male",
    Service: "wash",
    Breed: "pitbull"
}
let pet2={
    Name: "Lucky",
    Age: 3,
    Gender: "male",
    Service: "nails",
    Breed: "english bull"
}
let pet3={
    Name: "Bud",
    Age: 3,
    Gender: "Female",
    Service: "brush",
    Breed: "Golden retriever"
}
//make the array
let petList = [pet1, pet2, pet3]
// display tthe count of the pets
document.getElementById("petCount").innerHTML =`Total registered Pets:  ${petList.length}`;
//add a fuction to display names
function petNames() {
    let list = document.getElementById("petNames")
    for(let i= 0; i<petList.length; i++) {
        console.log(petList[i].name);
        list.innerHTML += `<li> ${petList[i].Name}</li>`
    }
}
petNames();