
//retrieve form values

function getUserInput () {
    const animalInput = document.getElementById("animal").value;
    const colorInput = document.getElementById("color").value;
    const letterInput = document.getElementById("letter").value;
    const bandInput = document.getElementById("band").value;
    const numInput = document.getElementById("num").value;

    const userInputString = animalInput + ' ' + colorInput + ' ' + letterInput + ' ' + bandInput + ' ' + numInput;
    //determine string length, then direct user to 1 of 3 programming languages based on value of string length.
    if (userInputString.length >= 0 && userInputString.length < 15) {
        console.log('between 0 and 15');
    }
    else if (userInputString.length < 15 && userInputString.length > 25) {
        console.log('between 15 and 25');
    }
    else if (userInputString.length > 25) {
        console.log('greater than 25');

    }
}



// function for event handling, should be called in the window.onload event handler

function FormSubmissionEventHandler() {
    let form = document.querySelector("form");
    form.onsubmit = function(event) {
        event.preventDefault();
        getUserInput();
    }
}

window.onload = function () {
    FormSubmissionEventHandler();
}












