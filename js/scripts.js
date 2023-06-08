window.onload = function () {
    let form = document.querySelector("form");
    form.onsubmit = function(event) {

        const animal = document.getElementById("animal").value
        const color = document.getElementById("color").value
        const letter = document.getElementById("letter").value
        const band = document.getElementById("band").value
        const num = document.getElementById("num").value

        document.querySelector("id#animal").innerText =  animal;
        document.querySelector("id#color").innerText = color;
        document.querySelector("id#letter").innerText = letter;
        document.querySelector("id#band").innerText = band;
        document.querySelector("id#num").innerText = num;

        document.querySelector("div#java").removeAttribute("class");
        
        event.preventDefault();
     };
    };



// Hello, sorry this file is so bare. I had planned to gather all 5 form inputs as strings, count the length of the string after all questions had been answered, and then assign one of the three hidden results depending on length of their answers. I clearly failed in this but wanted whomever corrects this dumpster fire to have an idea of what I wanted to do.




