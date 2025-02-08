console.log("test");//make sure i linked it correctly
//add 3 pets
let petSalon = {
    name: "Clean Pet",
    address: {
        street:"1213 f st.",
        street2: "unit 100",
        city: "San Diego",
        state:"Ca",
        zip: "92101-0100"
    }
}
let petList=[]

let petName= document.getElementById("txtName");
let petAge= document.getElementById("txtAge");
let petGender= document.getElementById("txtGender");
let petBreed= document.getElementById("txtBreed");
let petService= document.getElementById("txtService");

function pet(Name, Age, Gender, Breed, Service) {
    this.Name=Name;
    this.Age=Age;
    this.Gender=Gender;
    this.Breed=Breed;
    this.Service=Service
}

function clearInputs() {
    petName.value=""
    petAge.value=""
    petGender.value=""
    petBreed.value=""
    petService.value=""
}

function register() {
    let newPet = new pet(petName.value, petAge.value, petGender.value, petBreed.value, petService.value);
    petList.push(newPet)
    console.log(petList);
    clearInputs();

}

function init() {
    let pet1= new pet("spike", 21, "male", "pit", "Wash");
    let pet2= new pet("Bud", 13, "male", "Retriever", "Trim");
    petList.push(pet1, pet2);
    console.log(petList);
    displayTable();
    
}

function displayTable() {
    let petRows = document.getElementById("petRows");
    let rows="";
    for (let i = 0; i < petList.length; i++) {
        let pet = petList[i];
        rows +=`
            <tr id=${i}
            <tb>${pet.name}</tb>
            <tb>${pet.age}</tb>
            <tb>${pet.gender}</tb>
            <tb>${pet.breed}</tb>
            <tb>${pet.service}</tb>
        `
    }
    petRows.innerHTML=rows;
}



window.onload = init;


