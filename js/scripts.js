
//retrieve form values and concatenate them into one string.

function getUserInput () {
    const animalInput = document.getElementById("animal").value;
    const colorInput = document.getElementById("color").value;
    const letterInput = document.getElementById("letter").value;
    const bandInput = document.getElementById("band").value;
    const numInput = document.getElementById("num").value;

    const parentDiv = document.getElementById("programming-selector");
    let childH2 = document.createElement("h2");
    let childp = document.createElement("p");
    childH2.setAttribute("id", "h2-child");
    childp.setAttribute("id", "child-p");
    parentDiv.append(childH2);
    parentDiv.append(childp);
    
    const userInputString = animalInput + ' ' + colorInput + ' ' + letterInput + ' ' + bandInput + ' ' + numInput;

    //determine string length, then direct user to 1 of 3 programming languages based on value of string length.
    if (userInputString.length >= 0 && userInputString.length <= 20) {
        childH2.innerText = "Java is your language";
        childp.innerText = "Java is your destiny(what year is it?), well anyways get after it friendo!";
        
    }
    else if (userInputString.length > 20 && userInputString.length <= 30) {
        childH2.innerText = "Python is your language";
        childp.innerText = "Python is your destiny, get after it ya ssssssnake!";
     
    }
    else if (userInputString.length > 30) {
        childH2.innerText = "Swift is your language";
        childp.innerText = "Swift is your destiny,hope you dig Apple, friendo!";
    }
}

// function for event handling, should be called in the window.onload event handler

function FormSubmissionEventHandler() {
    let form = document.querySelector("form");
    form.onsubmit = function(event) {
        event.preventDefault();

        if(document.getElementById("child-p")){
            document.getElementById("child-p").remove();
        }
        if(document.getElementById("h2-child")){
            document.getElementById("h2-child").remove();
        }
        getUserInput();
    }
}

window.onload = function () {
    FormSubmissionEventHandler();
}












