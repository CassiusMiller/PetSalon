console.log("test");


//JS vs JQuery(get elements)

//id
//js
let htmlElemnt= document.getElementById("results")
//jQuery
jQuery("#results")
htmlElemnt= $("#results")

//select by Tag
//js
let htmlElemnts2= document.getElementsByTagName("p")
//jQuery
htmlElemnts2= $("p")

//select by class
//js
let htmlElemnts3= document.getElementsByClassName("bg-tomato")
//jQuery
htmlElemnts2= $(".bg-tomato")


//id selectors
let redParagraph= $("#red").css("background", "red").css("color", "white")

let blueParagraph= $("#blue").css({
  "background": "blue",
  "color": "white"
})


//class selector
let paragraphWithBorder= $(".with-border");
paragraphWithBorder.css("border", "5px solid black")

paragraphWithBorder.on("click",function() {
  console.log("clicked");
  $(".with-border").addClass("bg-gray");
});


let paragraph= $("p")
paragraph.css("cursor", "pointer")

function register() {
  let testEnty= $("testInput").val();
  $("results").append(<li>${testEnty}</li>)
}

$("#btnRegister").on("click",register);

function clickMe() {
  console.log("clickme");
  
}

$