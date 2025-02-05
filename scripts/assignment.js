console.log("test");//make sure i linked it correctly
//add 3 pets
let petSalon = {
    name: "Clean Pets",
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
    clearInputs();
}

function init() {
    let pet1= new pet("spike", 21, "male", "pit", "Wash");
    let pet2= new pet("Bud", 13, "male", "Retriever", "Trim");
    let pet3= new pet("Lucky", 21, "male", "puddle", "Nails");

    petList.push(pet1, pet2, pet3);
}

window.onload = init;