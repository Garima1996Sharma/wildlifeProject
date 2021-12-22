// providing message on clicking 

function myFunc() {
    element = document.getElementById("sayy");
    element.innerHTML = "Save these loving living beings.<br><br>They also have <em>HEART!!<em><br><br>Don't they???<br><br>";
    element.style.color = "white";
    element.style.fontSize = "2em";
    element.style.backgroundColor = "black";
    element.style.border = "2px solid red";
}
// reseting message on clicking 
function resetValues() {
    element1 = document.getElementById("sayy");
    element1.innerHTML = "SAY NO TO FUR!!";
    
}

function overEffect() {
    element2 =  document.getElementById("habitat");
    element2.style.color = "darkblue";
    element2.style.fontSize = "3.75em";

}

function outEffect() {
   
    element2.style.color = "red";
    element2.style.fontSize = "3.5em";
}