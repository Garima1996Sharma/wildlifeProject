
// generating email Id and providing address

let display = document.getElementById("email");
function generateEmail(form){

console.log(form);
console.log(form.length);

let element = document.getElementById("fname");

let email = form["fname"].value +"." + form["num"].value+form["lname"].value + "@donation.ca"
document.getElementById("email").innerHTML ="<b>"+"Your Email Id is: "+"<b>"+"<br><br>"+"<b>"+"<u>"+"<em>"+email +"<\em>"+ "</u>" +"</b>"+"<br><br>"+"\n\n\nContact us at:"+"<br><br>" + "Donation Foundation"+"<br>"+"1242 61Th Avenue"+"<br>"+"V5X 2N9"+"<br>"+"\n\nWest Vancouver"+"<br>"+"\n\nCanada";

document.getElementById("email").style.backgroundImage = "url('images/grizzy-bear.jpg')";
document.getElementById("email").style.color = "red";
document.getElementById("email").style.backgroundColor ="lightGreen";
document.getElementById("email").style.fontSize = "0.80em";
document.getElementById("email").style.padding = "0.5em";
document.getElementById("email").style.border = "2px solid black";


form["fname"].focus();
form.reset();
}
function resetValues() {
    display.innerHTML = "";
}