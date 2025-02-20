function Service(name, price) {
	this.name=name
	this.price=price
}

function validService(service){
	let isValidTitle = true;
	let isValidPrice = true;

	if(service.title==""){
			isValidTitle=false;
			$("#txtTitle").css("border","1px solid red");
			$("#titleRequirementText").show().css("color","red");
	}else{
			$("#txtTitle").css("border","1px solid black");
			$("#titleRequirementText").hide();
	}

	if(service.price==""){
			isValidPrice=false;
			$("#txtPrice").css("border","1px solid red");
			$("#priceRequirementText").show().css("color","red");
	}else{
			$("#txtPrice").css("border","1px solid black");
			$("#priceRequirementText").hide();
	}

	return isValidTitle && isValidPrice;
}

function register(){
	// get the values from the inputs
	let inputTitle=$("#txtTitle").val();
	let inputPrice=$("#txtPrice").val();

	let newService = new Service(inputTitle,inputPrice);
	if(validService(newService)==true){
			console.log("My service is valid");
			saveService(newService);// fn in SM
	}
}

function init(){
	//event handler
	$("#btnRegister").on("click",register);
	
	$("#titleRequirementText").hide();
	$("#priceRequirementText").hide();

}

window.onload=init;