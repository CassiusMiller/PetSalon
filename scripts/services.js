function Service(name, price) {
	this.name=name
	this.price=price
}

function validService() {
	if (condition) {
		
	}
}

function register() {
	console.log();
}
function signIn(){
	let login = false;
	alert("This page is restricted to Employees only.");
	let userName = prompt("User Name");
	let password = prompt("Password");
	if (userName.value === "C.Miller"){
		login = true
		
	}
	if (password = 12345){
		login =	true
	}
	return login;
}

function init() {
	$("#btnRegister").on("click",register)
	let service = new Service("grooming", 50);
	let service2 = new Service("vacines", 150);
	signIn();
}
window.onload=init