let opener = document.getElementById("opener");
let message = document.getElementById("message");
let nameInput = document.getElementById("name");
let greetingInput = document.getElementById("greeting");
let backgroundSelect = document.getElementById("background");
let updateButton = document.getElementById("updateButton");

updateButton.addEventListener("click", function() {
    opener.textContent = "Hello " + nameInput.value + "!";
    message.textContent = greetingInput.value;
    document.body.style.backgroundColor = backgroundSelect.value;
});
