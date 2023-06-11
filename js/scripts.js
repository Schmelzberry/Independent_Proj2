
//retrieve form values

function getUserInput () {
    const animalInput = document.getElementById("animal").value;
    const colorInput = document.getElementById("color").value;
    const letterInput = document.getElementById("letter").value;
    const bandInput = document.getElementById("band").value;
    const numInput = document.getElementById("num").value;

    const userInputString = animalInput + ' ' + colorInput + ' ' + letterInput + ' ' + bandInput + ' ' + numInput;
    
    console.log(userInputString);

};

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
    console.log("success");
}












