function handleSelect (event) {
    event.preventDefault();
    const selection = document.getElementById("animalpref").value;
}

window.addEventListener("load", function() {
    this.document.getElementById("select-form").addEventListener("submit", handleSelect);
});




