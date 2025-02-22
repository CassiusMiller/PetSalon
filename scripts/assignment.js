let petList=[];
console.log("test");

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

let petName= document.getElementById("txtName");
let petAge= document.getElementById("txtAge");
let petGender= document.getElementById("txtGender");
let petBreed= document.getElementById("txtBreed");
let petService= document.getElementById("txtService");
let petDate= document.getElementById("txtDate");
let petPayment= document.getElementById("txtPayment");
let petPhone=  document.getElementById("txtPhone");

function Pet(Name, Age, Gender, Breed, Service, Date, Payment, Phone) {
	this.Name=Name;
	this.Age=Age;
	this.Gender=Gender;
	this.Breed=Breed;
	this.Service=Service;
	this.Date=Date;
	this.Payment=Payment;
	this.Phone=Phone
}

function register() {
	let newPet = new Pet(petName.value, petAge.value, petGender.value, petBreed.value, petService.value, petDate.value, petPayment.value, petPhone.value);
	if(isValidate(newPet)){
		petList.push(newPet);
		displayTable();
		displayPetsInfo();
		clearInputs();
		showAlert("New pet was added","success")
	}
	else{
		showAlert("Please, add all  the information","danger")
	}

}

function isValidate(pet) {
	let validation = true;
	petName.classList.remove("error");
  petAge.classList.remove("error");
	petGender.classList.remove("error");
  petBreed.classList.remove("error");
	petService.classList.remove("error");
  petDate.classList.remove("error");
	petPayment.classList.remove("error");
	petPhone.classList.remove("error");

	document.getElementById("alert-error").classList.add("hide");

	if (pet.Name==="") {
		validation=false
		petName.classList.add("error")
	}
	if (pet.Age==="") {
		validation=false
		petAge.classList.add("error")
	}
	if (pet.Gender==="---Select a Gender---") {
		validation=false
		petGender.classList.add("error")
	}
	if (pet.Breed==="") {
		validation=false
		petBreed.classList.add("error")
	}
	if (pet.Service==="---Select a Service---") {
		validation=false
		petService.classList.add("error")
	}
	if (pet.Date==="") {
		validation=false
		petDate.classList.add("error")
	}
	if (pet.Payment==="") {
		validation=false
		petPayment.classList.add("error")
	}
	if (pet.Phone==="") {
		validation=false
		petPhone.classList.add("error")
	}
	return validation;
}

function clearInputs() {
	petName.value="";
	petAge.value="";
	petGender.value="";
	petBreed.value="";
	petService.value="";
	petDate.value="";
	petPayment.value="";
}

function deletePet(petId){
	document.getElementById(petId).remove();
	petList.splice(petId,1);
	displayTable();
	displayPetsInfo();
	showAlert("The pet was deleted","warning");
}

function showAlert(msg,type){
    let alertContainer = document.getElementById("alertContainer");
    alertContainer.innerHTML=`
        <div id="alert-error" class="alert alert-${type}" role="alert">
            ${msg}
        </div>
    `;
    setTimeout(()=>{
        document.getElementById("alert-error").remove();
    },3000);     // 1000 = 1s
}

function displayTable() {  
	let petRows = document.getElementById("petRows");
	let rows="";
	for (let i = 0; i < petList.length; i++) {

	let pet = petList[i];
	console.log("PET: ", pet);
	
	rows +=`
		<tr id=${i}>
			<td>${pet.Name}</td>
			<td>${pet.Age}</td>
			<td>${pet.Gender}</td>
			<td>${pet.Breed}</td>
			<td>${pet.Service}</td>
			<td>${pet.Date}</td>
			<td>${pet.Payment}</td>
			<td>     
				<button class="btn btn-danger btn-sm" onclick="deletePet(${i})">Delete</button>
				<button class="btn btn-info btn-sm disabled">Edit</button>
			</td>
		</tr>
		`
	}
	petRows.innerHTML= rows;
}

function displayPet(){
	let cardSection = document.getElementById("petNames");
	let result = "";

	for(let i=0; i<petList.length;i++){
	let pet = petList[i];
	result += `
		<div id=${i} class="card" style="width: 18rem;">
			<div class="card-body">
				<h5 class="card-title">Name: ${pet.Name}</h5>
				<h6 class="card-subtitle mb-2 text-body-secondary">Age: ${pet.Age}</h6>
				<p class="card-text">Gender: ${pet.Gender}</p>
				<p class="card-text">Breed: ${pet.Breed}</p>
				<p class="card-text">Service: ${pet.Service}</p>
				<p class="card-text">Date: ${pet.Date}</p>
				<p class="card-text">Payment: ${pet.Payment}</p>
			</div>
		</div>
		` 
	}
	
	cardSection.innerHTML = result;
}

function displayPetsInfo(){
	document.getElementById("petsCounter").innerHTML= "Total pets = " + petList.length;
}

function getServices(){
	let list = read();// read the services from LS
	let option="";
	for(let i=0;i<list.length;i++){
			let service=list[i];
			option += `<option value="${service.title}">${service.title} - ${service.price}</option>`;
	}
	inputService.innerHTML=option;
}


function init() {
	
	let pet1= new Pet("Spike", 21, "Male", "pit", "Grooming", "03/05/2025", "Card");
	let pet2= new Pet("Bud", 13, "Male", "Retriever", "Nails", "03/04/2025", "ApplePay");
	petList.push(pet1, pet2);
	displayTable();
	displayPetsInfo();
	getServices();
	document.getElementById("alert-error").classList.add("hide");
}

window.onload = init;


