// User Interface Logic
function hideResults() {
    document.getElementById("java").setAtrribute("class", "hidden");
    document.getElementById("pyth").setAtrribute("class", "hidden");
    document.getElementById("ruby").setAtrribute("class", "hidden");
}
    
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();

  
  }
const age = parseInt(document.querySelector("input#animalpref").value);






}
